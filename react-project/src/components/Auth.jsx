import auth0 from "auth0-js";
import Routes from "./Routes";
import history from "./history";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "kaloyan-tomov.eu.auth0.com",
    clientID: "PFwshUhKGzkhvMOBcISWb31JRnhM61Su",
    redirectUri: "http://localhost:3000",
    audience: "https://kaloyan-tomov.eu.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  static login() {
    this.auth0.authorize();
  }

  static logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    history.replace("/");
  }

  static handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/");
      } else if (err) {
        history.replace("/");
        alert(err);
      }
    });
  }

  static setSession(authResult) {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    history.replace("/home");
  }

  static isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }
}
