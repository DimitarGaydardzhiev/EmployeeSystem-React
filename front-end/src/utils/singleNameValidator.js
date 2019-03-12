import toastr from 'toastr'

function singleNameValidator(name) {
    if (name === '') {
        debugger
        toastr.error('Name is required')
        return false
    }

    return true
}

export default singleNameValidator
