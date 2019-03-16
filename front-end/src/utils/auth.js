class Auth {
  static isUserAuthenticated() {
    return window.localStorage.getItem('authToken') !== null
  }

  static getToken() {
    return window.localStorage.getItem('authToken')
  }

  static getUsername() {
    return window.localStorage.getItem('username')
  }

  static isUserAdmin() {
    let role = window.localStorage.getItem('roles')
    if (!role) {
      return false
    }

    if (role === 'administrator') {
      return true
    }

    return false
  }

  static getUserId() {
    return window.localStorage.getItem('userId')
  }
}

export default Auth
