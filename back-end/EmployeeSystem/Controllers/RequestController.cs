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
                }
                catch (Exception e)
                {
                    ShowNotification(e.Message, ToastrSeverity.Error);
                    return View("Add", model);
                }
                ShowNotification(SuccessMessages.SuccessAdd, ToastrSeverity.Success);

                return RedirectToAction("MyRequests");
            }

            return View("Add", model);
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
        public IActionResult Approve(int requestId)
        {
            service.ApproveRequest(requestId);
            return RedirectToAction("Pending");
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        public IActionResult Unapprove(int requestId)
        {
            service.UnapproveRequest(requestId);
            return RedirectToAction("Approved");
        }

        [HttpGet]
        public IEnumerable<RequestDto> Approved()
        {
            return service.GetApprovedRequests();
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            if (id == 0)
                return this.BadRequest();

            bool canEdit = service.CanEdit(id);
            if (!canEdit)
            {
                ShowNotification(ErrorMessages.CanNotEditAnotherUserRequest, ToastrSeverity.Error);
                return RedirectToAction("MyRequests", null);
            }

            try
            {
                service.Delete(id);
                ShowNotification(SuccessMessages.SuccesslDelete, ToastrSeverity.Success);
                return RedirectToAction("MyRequests", null);
            }
            catch (Exception ex)
            {
                ShowNotification(ex.Message, ToastrSeverity.Error);
                return RedirectToAction("MyRequests", null);
            }
        }
    }
}