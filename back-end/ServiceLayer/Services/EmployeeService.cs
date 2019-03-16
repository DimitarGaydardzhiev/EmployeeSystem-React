using AutoMapper;
using DatLayer.Interfaces;
using DbEntities.Models;
using DTOs.Model;
using DTOs.Models;
using EmployeeSystem.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ServiceLayer.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace ServiceLayer.Services
{
    public class EmployeeService : BaseService<EmployeeUser>, IEmployeeService
    {
        private readonly IRoleService roleService;
        private readonly IPositionService positionService;
        private readonly IDepartmentService departmentService;
        private readonly IAccountService accountService;
        private readonly UserManager<AspUser> userManager;
        private readonly IRepository<Project> projectRepository;
        private readonly IMapper mapper;

        public EmployeeService(
            IRepository<EmployeeUser> repository,
            IRoleService roleService,
            IPositionService positionService,
            IDepartmentService departmentService,
            IAccountService accountService,
            UserManager<AspUser> userManager,
            IRepository<Project> projectRepository,
            IMapper mapper)
            : base(repository)
        {
            this.roleService = roleService;
            this.positionService = positionService;
            this.departmentService = departmentService;
            this.accountService = accountService;
            this.userManager = userManager;
            this.mapper = mapper;
            this.projectRepository = projectRepository;
        }

        public IEnumerable<EmployeeDto> All()
        {
            var result = GetEmployees(isActive: true);
            return result;
        }

        public IEnumerable<EmployeeDto> GetFormerEmployees()
        {
            var result = GetEmployees(isActive: false);
            return result;
        }

        public IEnumerable<RoleDto> GetRoles()
        {
            var result = roleService.All();
            return result;
        }

        public IEnumerable<BaseDto> GetPositions()
        {
            var positions = positionService.All();
            return positions;
        }

        public IEnumerable<BaseDto> GetDepartments()
        {
            var departments = departmentService.All();
            return departments;
        }

        public IEnumerable<BaseDto> GetManagers()
        {
            var result = repository.All()
                 .Where(e => e.IsActive)
                 .Select(m => new BaseDto()
                 {
                     Id = m.Id,
                     Name = $"{m.FirstName} {m.LastName}"
                 });

            return result;
        }

        private IEnumerable<EmployeeDto> GetEmployees(bool isActive)
        {
            var employees = repository.All()
                .Include(e => e.Department)
                .Include(e => e.EmployeePosition)
                .Where(e => e.IsActive == isActive)
                .ToList();

            return mapper.Map<List<EmployeeUser>, List<EmployeeDto>>(employees);
        }

        public ProfileInfoDto GetProfileInfo()
        {
            var userId = repository.UserId;

            var employee = repository.All()
                .Include(e => e.Department)
                .Include(e => e.EmployeePosition)
                .Include(e => e.AspUser)
                .FirstOrDefault(u => u.Id == userId);

            var userRole = userManager.GetRolesAsync(employee.AspUser).Result[0];
            
            var result = new ProfileInfoDto()
            {
                Department = employee.Department?.Name,
                Position = employee.EmployeePosition?.Name,
                Description = employee.PersonalDescription,
                Projects = GetUserProjects(userId),
                Email = employee.AspUser.Email,
                Role = userRole
            };

            return result;
        }

        private IEnumerable<ProjectDto> GetUserProjects(int userId)
        {
            var projects = projectRepository.All().Include(p => p.EmployeeUserProjects)
                .Where(p => p.EmployeeUserProjects.Any(eup => eup.EmployeeUserId == userId))
                .ToList();

            return mapper.Map<List<Project>, List<ProjectDto>>(projects);
        }
    }
}
