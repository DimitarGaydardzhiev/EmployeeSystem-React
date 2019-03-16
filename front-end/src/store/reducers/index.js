import departmentReducer from './department-reducer';
import positionReducer from './position-reducer';
import employeeReducer from './employee-reducer';
import loginReducer from './auth-reducers';
import roleReducer from './role-reducers';
import requestReducer from './request-reducers';
import deleteReducer from './delete-reducers';
import projectReducer from './project-reducers';

export default {
  login: loginReducer,
  loginError: loginReducer,
  departments: departmentReducer,
  positions: positionReducer,
  employees: employeeReducer,
  formerEmployees: employeeReducer,
  formerEmployees: employeeReducer,
  addEmployee: employeeReducer,
  addEmployeeError: employeeReducer,
  addDepartment: departmentReducer,
  addDepartmentError: departmentReducer,
  addPosition: positionReducer,
  addPositionError: positionReducer,
  roles: roleReducer,
  myRequests: requestReducer,
  addRequest: requestReducer,
  addRequestError: requestReducer,
  requestTypes: requestReducer,
  pendingRequests: requestReducer,
  approvedRequests: requestReducer,
  deleteSuccess: deleteReducer,
  deleteError: deleteReducer,
  approveSuccess: requestReducer,
  unapproveSuccess: requestReducer,
  approveError: requestReducer,
  unapproveError: requestReducer,
  projects: projectReducer
}
