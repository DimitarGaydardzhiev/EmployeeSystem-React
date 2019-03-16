import toastr from 'toastr'

function singleNameValidator(name) {
    if (name === '') {
        toastr.error('Name is required')
        return false
    }

    return true
}

export default singleNameValidator
