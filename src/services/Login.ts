import { setLoginToken, clearLoginToken } from './Session';

export function performLogin(token: String) {
    setLoginToken(token);
}

export function performLogout() {
    clearLoginToken();
}