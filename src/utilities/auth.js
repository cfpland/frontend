import auth0 from 'auth0-js'
const auth0ClientId = 'IQFgYz6dzi36nwz39BZQ8XCGpytKh6CO'
const auth0Domain = 'cfpland.auth0.com'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: auth0Domain,
    clientID: auth0ClientId,
    redirectUri: 'http://localhost:8000/',
    responseType: 'token id_token',
    scope: 'openid',
  })

  login() {
    this.auth0.authorize()
  }
}
