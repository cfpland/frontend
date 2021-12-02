import auth0 from 'auth0-js'
const auth0ClientId = 'IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO'
const auth0Domain = 'cfpland.auth0.com'
const apiId = 'https://api.cfpland.com/'
const devRedirectUri = 'http://localhost:8000/c/all/'
const prodRedirectUri = 'https://www.cfpland.com/c/all/'

export const isBrowser = () => typeof window !== 'undefined'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: auth0Domain,
    clientID: auth0ClientId,
    redirectUri:
      process.env.NODE_ENV === 'development' ? devRedirectUri : prodRedirectUri,
    responseType: 'token id_token',
    scope: 'openid email',
    audience: apiId,
  })

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    return this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        window.location.href = '/c/all/'
      } else if (err) {
        return err
      }

      return null
    })
  }

  setSession(authResult) {
    localStorage.setItem('accessToken', authResult.accessToken)
    localStorage.setItem('idToken', authResult.idToken)
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    localStorage.setItem('expiresAt', expiresAt)
  }

  getAccessToken() {
    return localStorage.getItem('accessToken')
  }

  getIdToken() {
    return localStorage.getItem('idToken')
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
    // Remove token from localStorage
    localStorage.removeItem('accessToken')
    localStorage.removeItem('idToken')
    localStorage.removeItem('expiresAt')

    this.auth0.logout({
      returnTo: window.location.origin,
    })

    window.location.href = '/'
  }

  isAuthenticated() {
    return (
      isBrowser() &&
      localStorage.getItem('accessToken') &&
      localStorage.getItem('accessToken').length > 0
    )
  }
}
