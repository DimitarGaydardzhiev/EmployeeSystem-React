import toastr from 'toastr'

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

function registerValidator(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  roleId,
  positionId) {
  if (!firstName) {
    toastr.error('First Name is required')
    return false
  }
  if (!lastName) {
    toastr.error('Last Name is required')
    return false
  }
  if (!emailRegex.test(email) || !email) {
    toastr.error('Invalid email address')
    return false
  }
  if (!password) {
    toastr.error('Password is required')
    return false
  }
  if (!confirmPassword) {
    toastr.error('Confirm password is required')
    return false
  }
  if (password !== confirmPassword) {
    toastr.error('Password and confirm password must match')
    return false
  }
  if (!roleId) {
    toastr.error('Role is required')
    return false
  }
  if (!positionId) {
    toastr.error('Position is required')
    return false
  }

  return true
}

export default registerValidator
