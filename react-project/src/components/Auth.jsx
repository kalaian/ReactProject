import auth0 from 'auth0-js';
import Routes from './Routes';



export default class Auth {

  auth0 = new auth0.WebAuth({
    domain: "kaloyan-tomov.eu.auth0.com",
    clientID: "PFwshUhKGzkhvMOBcISWb31JRnhM61Su",
    redirectUri: "http://localhost:3000",
    audience: "https://kaloyan-tomov.eu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }
}