using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DatLayer.Interfaces;
using DbEntities.Models;
using DTOs.Models;
using EmployeeSystem.Models;
using EmployeeSystem.Models.AccountViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ServiceLayer.ErrorUtils;
using ServiceLayer.Interfaces;
using Microsoft.Extensions.Configuration;

namespace ServiceLayer.Services
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<AspUser> userManager;
        private readonly SignInManager<AspUser> signInManager;
        private readonly IRepository<EmployeeUser> employeeUserRepository;
        private readonly IConfiguration configuration;

        public AccountService(
            UserManager<AspUser> userManager,
            SignInManager<AspUser> signInManager,
            IRepository<EmployeeUser> employeeUserRepository,
            IConfiguration configuration)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.employeeUserRepository = employeeUserRepository;
            this.configuration = configuration;
        }

        public async Task<object> Login(LoginViewModel model)
        {
            //var user = employeeUserRepository.All()
            //    .Include(u => u.AspUser)
            //    .FirstOrDefault(u => u.AspUser.Email == model.Email);

            //if (user != null && !user.IsActive)
            //    return SignInResult.Failed;

            //return await signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
            var aspUser = await this.userManager.FindByEmailAsync(model.Email);

            if (aspUser == null)
            {
                //throw new InvalidUserException(ErrorMessages.InvalidLoginAttemptMessage);
            }

            var employeeUser = employeeUserRepository.All()
                .Include(u => u.AspUser)
                .FirstOrDefault(u => u.AspUser.Id == aspUser.Id);

            if (employeeUser.IsActive)
            {
                SignInResult result = await this.signInManager.CheckPasswordSignInAsync(aspUser, model.Password, false);

                if (result.Succeeded)
                {
                    var token = await this.GenerateJwtToken(model.Email, aspUser);
                    return token;
                }
            }

            return null;
        }

        public async Task<IdentityResult> Register(EmployeeDto model)
        {
            var user = new AspUser { UserName = model.Email, Email = model.Email };
            var result = await userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                //TODO: Add toastr
                await userManager.AddToRoleAsync(user, "user");

                user.EmployeeUser = new EmployeeUser()
                {
                    IsActive = true,
                    Birthday = model.DateOfBirth,
                    DepartmentId = model.DepartmentId,
                    EmployeePositionId = model.PositionId,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    InCompanyFrom = model.StartingDate,
                    PersonalDescription = model.Description,
                    ManagerId = model.ManagerId,
                };

                await userManager.UpdateAsync(user);
            }

            return result;
        }

        public async Task Logout()
        {
            await signInManager.SignOutAsync();
        }

        private async Task<object> GenerateJwtToken(string email, AspUser user)
        {
            var userRole = await userManager.GetRolesAsync(user);

            user = userManager.Users
                    .Include(u => u.EmployeeUser)
                    .Where(u => u.Id == user.Id).FirstOrDefault();

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Role, userRole[0], "Role"),
                new Claim("id", user.EmployeeUser.Id.ToString()),
                new Claim("username", user.UserName),
                new Claim("role", userRole[0])
                // add more Claims if it's necessary
            };

            var jwtSettings = this.configuration.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(1);

            var token = new JwtSecurityToken(
                jwtSettings["JwtIssuer"],
                jwtSettings["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
