using DTOs.Enums;
using DTOs.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NToastNotify;
using ServiceLayer.Interfaces;
using ServiceLayer.Utils;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeSystem.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    public class ProjectController : BaseController
    {
        private readonly IProjectService service;

        public ProjectController(IProjectService service, IToastNotification toastNotification)
            : base(toastNotification)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<ProjectDto> All()
        {
           return service.GetCompanyProjects();
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        public IActionResult Edit(ProjectDto model)
        {
            var result = service.GetEmployees();
            model.Employees = result.Employees;
            return View("Add", model);
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        public IActionResult Add()
        {
            var result = service.GetEmployees();
            return View(result);
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        public IActionResult Save([FromBody] ProjectDto model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    service.Save(model);
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }

                return Ok();
            }

            return BadRequest(string.Join(Environment.NewLine, ModelState.SelectMany(e => e.Value.Errors.Select(er => er.ErrorMessage))));
        }

        [HttpGet]
        public IEnumerable<ProjectDto> My()
        {
            return service.GetUserProjects();
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            if (id == 0)
                return this.BadRequest("Id not found");

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