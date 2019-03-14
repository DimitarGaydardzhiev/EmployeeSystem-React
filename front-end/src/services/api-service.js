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
    debugger
    const res = await window.fetch(host + 'account/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
    debugger
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
    debugger
    const res = await window.fetch(host + `${name}/delete/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + Auth.getToken()
        }
    })
}


// async function register(username, email, password) {
//     const res = await window.fetch(host + 'auth/signup', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             username,
//             email,
//             password
//         })
//     })

//     return res.json()
// }

// async function login(email, password) {
//     const res = await window.fetch(host + 'auth/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email,
//             password
//         })
//     })

//     return res.json()
// }

// async function fetchStats() {
//     const res = await window.fetch(host + 'stats')
//     return res.json()
// }

// async function fetchProducts() {
//     const res = await window.fetch(host + 'book/all')
//     return res.json()
// }

// async function createProduct(data) {
//     const res = await window.fetch(host + 'book/create', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'bearer ' + Auth.getToken()
//         },
//         body: JSON.stringify(data)
//     })

//     return res.json()
// }

// async function editProduct(id, data) {
//     const res = await window.fetch(host + `book/edit/${id}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'bearer ' + Auth.getToken()
//         },
//         body: JSON.stringify(data)
//     })

//     return res.json()
// }

// async function deleteProduct(id) {
//     const res = await window.fetch(host + `book/delete/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Authorization': 'bearer ' + Auth.getToken()
//         }
//     })

//     return res.json()
// }

// async function createReview(id, data) {
//     const res = await window.fetch(host + `book/review/${id}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'bearer ' + Auth.getToken()
//         },
//         body: JSON.stringify(data)
//     })

//     return res.json()
// }

// async function likeProduct(id) {
//     const res = await window.fetch(host + `book/like/${id}`, {
//         method: 'POST',
//         headers: {
//             'Authorization': 'bearer ' + Auth.getToken()
//         }
//     })

//     return res.json()
// }

// async function unlikeProduct(id) {
//     const res = await window.fetch(host + `book/unlike/${id}`, {
//         method: 'POST',
//         headers: {
//             'Authorization': 'bearer ' + Auth.getToken()
//         }
//     })

//     return res.json()
// }

// async function submitOrder(data) {
//     const res = await window.fetch(host + 'orders/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'bearer ' + Auth.getToken()
//         },
//         body: JSON.stringify(data)
//     })

//     return res.json()
// }

// async function fetchUserOrders() {
//     const res = await window.fetch(host + 'orders/user', {
//         headers: {
//             'Authorization': 'bearer ' + Auth.getToken()
//         }
//     })
//     return res.json()
// }

// async function fetchPendingOrders() {
//     const res = await window.fetch(host + 'orders/pending', {
//         headers: {
//             'Authorization': 'bearer ' + Auth.getToken()
//         }
//     })
//     return res.json()
// }

// async function approveOrder(id) {
//     const res = await window.fetch(host + `orders/approve/${id}`, {
//         method: 'POST',
//         headers: {
//             'Authorization': 'bearer ' + Auth.getToken()
//         }
//     })

//     return res.json()
// }

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
    deleteItem
}
