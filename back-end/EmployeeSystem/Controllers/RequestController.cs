using DTOs.Enums;
using DTOs.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NToastNotify;
using ServiceLayer.ErrorUtils;
using ServiceLayer.Interfaces;
using ServiceLayer.Utils;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeSystem.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    public class RequestController : BaseController
    {
        private readonly IRequestService service;

        public RequestController(IRequestService service, IToastNotification toastNotification)
            : base(toastNotification)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult Edit(RequestDto model)
        {
            ViewBag.RequestTypes = service.GetRequestTypes();
            bool canEdit = service.CanEdit(model.Id);

            if (!canEdit)
            {
                ShowNotification(ErrorMessages.CanNotEditAnotherUserRequest, ToastrSeverity.Error);
                return View("Add", model);
            }

            return View("Add", model);
        }

        [HttpGet]
        public IActionResult Add()
        {
            ViewBag.RequestTypes = service.GetRequestTypes();
            return View();
        }

        [HttpGet]
        public IEnumerable<BaseDto> GetRequestTypes()
        {
            return service.GetRequestTypes();
        }

        [HttpPost]
        [Authorize]
        public IActionResult Save([FromBody] RequestDto model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    service.Save(model);
                    return Ok();
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }

            }

            return BadRequest(string.Join(Environment.NewLine, ModelState.SelectMany(e => e.Value.Errors.Select(er => er.ErrorMessage))));
        }

        [HttpGet]
        public IEnumerable<RequestDto> MyRequests()
        {
            return service.GetMyRequests();
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        public IEnumerable<RequestDto> Pending()
        {
            return service.GetPendingRequests();
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        [Route("{id}")]
        public IActionResult Approve(int id)
        {
            try
            {
                service.ApproveRequest(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        [Route("{id}")]
        public IActionResult Unapprove(int id)
        {
            try
            {
                service.UnapproveRequest(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IEnumerable<RequestDto> Approved()
        {
            return service.GetApprovedRequests();
        }

        [HttpPost]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            if (id == 0)
                return this.BadRequest("Id can not be 0");

            bool canEdit = service.CanEdit(id);
            if (!canEdit)
            {
                return this.BadRequest("You can not edit this request");
            }

            try
            {
                service.Delete(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}