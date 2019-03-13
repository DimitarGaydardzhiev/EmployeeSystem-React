import toastr from 'toastr'

function requestValidator(from, to, requestTypeId) {
  if (!from) {
    toastr.error('From date is required')
    return false
  }
  if (!to) {
    toastr.error('To date is required')
    return false
  }
  if (!requestTypeId) {
    toastr.error('Request type is required')
    return false
  }

  return true
}

export default requestValidator
