
export function getLoginToken(): String | null {
    return sessionStorage.getItem("login-token");
}
  
export function setLoginToken(token: String) {
    sessionStorage.setItem("login-token", token.toString());
}

export function clearLoginToken() {
    sessionStorage.removeItem("login-token");
}