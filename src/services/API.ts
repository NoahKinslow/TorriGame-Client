import { apiCall } from "./Util";


export async function checkPassword(usernameString: String, passwordString: String) {
    const response = await apiCall(
        "GET",
        "/login",
        false,
        { usernameString, passwordString }
    );

    let responseBody = await response.json();
    return responseBody.match;
}

export async function checkAccountAvailable(usernameString: String) {
    const response = await apiCall(
        "GET",
        "/register",
        false,
        { usernameString}
    );

    let responseBody = await response.json();
    return responseBody.available;
}

export async function registerAccount(usernameString: String, passwordString: String) {
    const response = await apiCall(
        "POST",
        `/users/${usernameString}`,
        false,
        { passwordString }
    );
}