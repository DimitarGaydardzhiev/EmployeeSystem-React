import departmentReducer from './department-reducer';
import positionReducer from './position-reducer';
import employeeReducer from './employee-reducer';
import { loginReducer, loginErrorReducer } from './auth-reducers';
import roleReducer from './role-reducers';

export default {
  departments: departmentReducer,
  positions: positionReducer,
  employees: employeeReducer,
  formerEmployees: employeeReducer,
  login: loginReducer,
  //loginError: loginErrorReducer,
  formerEmployees: employeeReducer,
  addDepartment: departmentReducer,
  addDepartmentError: departmentReducer,
  addPosition: positionReducer,
  addPositionError: positionReducer,
  roles: roleReducer
}
