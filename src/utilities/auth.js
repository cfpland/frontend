import auth0 from 'auth0-js'
const auth0ClientId = 'IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO'
const auth0Domain = 'cfpland.auth0.com'
const apiId = 'https://api.cfpland.com/'

export const isBrowser = () => typeof window !== 'undefined'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: auth0Domain,
    clientID: auth0ClientId,
    redirectUri: 'http://localhost:8000/',
    responseType: 'token id_token',
    scope: 'openid read:me update:me',
    audience: apiId,
  })
  accessToken
  idToken
  expiresAt

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        window.location.href = '/'
      } else if (err) {
        console.error(err)
      }
    })
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.expiresAt = expiresAt
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('accessToken', authResult.accessToken)
  }

  getAccessToken() {
    return localStorage.getItem('accessToken')
  }

  renewTokens() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        this.logout()
        console.error(err)
      }
    })
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null
    this.idToken = null
    this.expiresAt = 0

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('accessToken')

    this.auth0.logout({
      returnTo: window.location.origin,
    })

    window.location.href = '/'
  }

  isAuthenticated() {
    return isBrowser() && localStorage.getItem('isLoggedIn') === 'true'
  }
}
