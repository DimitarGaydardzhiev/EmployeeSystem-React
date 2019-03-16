using DTOs.Enums;
using DTOs.Models;
using EmployeeSystem.Models.AccountViewModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NToastNotify;
using ServiceLayer.Interfaces;
using ServiceLayer.Utils;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeSystem.Controllers
{
    //[Authorize]
    [Route("[controller]/[action]")]
    public class AccountController : BaseController
    {
        private readonly IAccountService service;

        public AccountController(IAccountService service, IToastNotification toastNotification)
            : base(toastNotification)
        {
            this.service = service;
        }

        [TempData]
        public string ErrorMessage { get; set; }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login(string returnUrl = null)
        {
            // Clear the existing external cookie to ensure a clean login process
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginViewModel model)
        {
            object result;

            if (!this.ModelState.IsValid)
            {
                return BadRequest(string.Join(Environment.NewLine, ModelState.SelectMany(e => e.Value.Errors.Select(er => er.ErrorMessage))));
            }

            try
            {
                result = await this.service.Login(model);
                if (result == null)
                {
                    return BadRequest("Wrong Email address or password!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Json(result);
        }

        [HttpGet]
        [Authorize(Roles = "administrator")]
        public IActionResult Register(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        [Authorize(Roles = "administrator")]
        public async Task<IActionResult> Register([FromBody] EmployeeDto model, string returnUrl = null)
        {
            if (ModelState.IsValid)
            {
                var result = await service.Register(model);
                if (result.Succeeded)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest(string.Join(", ", result.Errors));
                }
            }

            return BadRequest(string.Join(Environment.NewLine, ModelState.SelectMany(e => e.Value.Errors.Select(er => er.ErrorMessage))));
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await service.Logout();
            return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        private IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction(nameof(HomeController.Index), "Home");
            }
        }
    }
}
