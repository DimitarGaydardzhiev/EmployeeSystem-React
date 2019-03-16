# EmployeeSystem-React
SoftUni ReactJs Project
## Idea ##
Application for managing company information like employees, projects, departments and positions. Creating different kind of requests and approve/unapprove functionality by the admins.

## Design ##
- **Administration**
	- **Departments** - Section for viewing and adding new departments
	- **Positions** - Section for viewing and adding new positions
- **Employees**
	- **Current Employees** - List of all currently active employees
	- **Former Employees** - List of all former employees. If an employee is deleted - goes here
	- **Add Employee** - Section accessible only by the admins. Here the admins can register new employees and assign them to a specific role.
- **Requests**
	- **My Requests** - List of all requests by the currently logged in user
	- **New Request** - Here the user can create a new request. The request can be paid, unpaid or sick leave
	- **Pending Requests** - All new requests made in the system. Accessible only by admins
	- **Approved Requests** - All already approved requests. Accessible only by admins
- **Projects**
	- **All Projects** - List of all added projects
	- **My Projects** - All the projects, assigned to the currently logged in user
	- **Add Project** - Section for creating a new project (for admins only)
- **User Information** - Link to info page, showing email, role, department, position and assigned projects to the currently logged in user

## Roles and permisions ##
There are two roles available, with the following permissions:

- **user**
	- View all departments
	- View all positions
	- View all current and former employees
	- View his/her own requests and create a new ones
	- View all projects and his/her own projects
	- View his/her own profile info
- **administrator** - can perform all of the user actions and also:
	- Add new departments and positions
	- Register new employees
	- View pending and approved requests
	- Approve/unapprove requests
	- Add new projects and assign users to them

**Not authorized users are able to see only positions and departments sections*


 
