import toastr from 'toastr'

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

function loginValidator(email, password) {
  if (!emailRegex.test(email) || email === '') {
    toastr.error('Please provide a correct email address')
    return false
  }
  if (password === '') {
    toastr.error('Please enter a valid password')
    return false
  }

  return true
}

export default loginValidator
