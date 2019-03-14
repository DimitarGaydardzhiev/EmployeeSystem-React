﻿using DTOs.Enums;
using DTOs.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NToastNotify;
using ServiceLayer.Interfaces;
using System;
using System.Collections.Generic;

namespace EmployeeSystem.Controllers
{
    //[Authorize]
    [Route("[controller]/[action]")]
    public class EmployeeController : BaseController
    {
        private readonly IEmployeeService service;

        public EmployeeController(IEmployeeService service, IToastNotification toastNotification)
            : base(toastNotification)
        {
            this.service = service;
        }

        [HttpGet]
        public IEnumerable<EmployeeDto> All()
        {
            return service.All();
        }

        [HttpGet]
        public IEnumerable<EmployeeDto> Former()
        {
            return service.GetFormerEmployees();
        }

        [HttpGet]
        public IEnumerable<RoleDto> GetRoles()
        {
            return service.GetRoles();
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        public IActionResult Add()
        {
            ViewBag.Roles = service.GetRoles();
            ViewBag.Positions = service.GetPositions();
            ViewBag.Departments = service.GetDepartments();
            ViewBag.Managers = service.GetManagers();
            return View();
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            if (id == 0)
                return this.BadRequest();

            try
            {
                service.Delete(id);
                ShowNotification("Employee deleted successfully", ToastrSeverity.Success);
                return RedirectToAction("All", null);
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            }
        }
    }
}