import Auth from "../utils/auth";

const host = 'http://localhost:54330/'

async function getAllDepartments() {
    const res = await window.fetch(host + 'department/all')
    return res.json()
}

async function getAllPositions() {
    const res = await window.fetch(host + 'position/all')
    return res.json()
}

async function getAllEmployees() {
    const res = await window.fetch(host + 'employee/all')
    return res.json()
}

async function getAllProjects() {
    // const res = await window.fetch(host + 'project/all')
    // return res.json()

    const res = await window.fetch(host + 'project/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res.json()
}

async function getAllFormerEmployees() {
    const res = await window.fetch(host + 'employee/former')
    return res.json()
}

async function getAllRoles() {
    const res = await window.fetch(host + 'employee/getRoles')
    return res.json()
}

async function login(email, password) {
    const res = await window.fetch(host + 'account/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    return res
}

async function register(firstName, lastName, email, password, confirmPassword, roleId, positionId, departmentId, description) {
    const res = await window.fetch(host + 'account/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        },
        body: JSON.stringify({
            firstName, lastName, email, password, confirmPassword, roleId, positionId, departmentId, description
        })
    })

    return res
}

async function addDepartment(name, id) {
    const res = await window.fetch(host + 'department/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        },
        body: JSON.stringify({
            name,
            id
        })
    })

    return res
}

async function getMyRequests() {
    const res = await window.fetch(host + 'request/myRequests', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'userId': Auth.getUserId(),
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res.json()
}

async function addPosition(name, id) {
    const res = await window.fetch(host + 'position/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        },
        body: JSON.stringify({
            name, id
        })
    })

    return res
}

async function addRequest(from, to, description, requestTypeId) {
    const res = await window.fetch(host + 'request/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'userId': Auth.getUserId(),
            'Authorization': 'bearer ' + Auth.getToken()
        },
        body: JSON.stringify({
            from, to, description, requestTypeId
        })
    })

    return res
}

async function getRequestTypes() {
    const res = await window.fetch(host + 'request/getRequestTypes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res.json()
}

async function getPendingRequests() {
    const res = await window.fetch(host + 'request/pending', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res.json()
}

async function getApprovedRequests() {
    const res = await window.fetch(host + 'request/approved', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res.json()
}

async function deleteItem(id, name) {
    const res = await window.fetch(host + `${name}/delete/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'userId': Auth.getUserId(),
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res;
}

async function approveRequest(id) {
    const res = await window.fetch(host + `request/approve/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'userId': Auth.getUserId(),
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res;
}

async function unapproveRequest(id) {
    const res = await window.fetch(host + `request/unapprove/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'userId': Auth.getUserId(),
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })

    return res;
}

export {
    getAllDepartments,
    getAllPositions,
    getAllEmployees,
    getAllFormerEmployees,
    login,
    register,
    addDepartment,
    addPosition,
    getAllRoles,
    getMyRequests,
    addRequest,
    getRequestTypes,
    getPendingRequests,
    getApprovedRequests,
    deleteItem,
    approveRequest,
    unapproveRequest,
    getAllProjects
}
