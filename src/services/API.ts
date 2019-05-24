import { apiCall } from "./Util";


export async function checkPassword(usernameString: String, passwordString: String) {
    const response = await apiCall(
        "POST",
        "/login",
        false,
        { username: usernameString, password: passwordString }
    );

    if (response.status == 404) {
        return false;
    }
    let responseBody = await response.json();
    console.log(responseBody);
    return responseBody.match;
}

export async function checkAccountAvailable(usernameString: String) {
    const response = await apiCall(
        "POST",
        "/register",
        false,
        { "username" : usernameString }
    );
    if (response.status == 404) {
        return false;
    }
    let responseBody = await response.json();
    console.log(responseBody);
    return responseBody.available;
}

export async function registerAccount(usernameString: String, passwordString: String) {
    const response = await apiCall(
        "POST",
        `/users/${usernameString}`,
        false,
        { "password" : passwordString }
    );
    if (response.status == 404) {

    }
    let responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
}

export async function hostAGame(usernameString: String) {
    const response = await apiCall(
        "POST",
        `/lobbies/${usernameString}`,
        false,
        {  }
    );
    if (response.status == 404) {

    }
    let responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
}

export async function startAGame(usernameAString: String, usernameBString: String) {
    const response = await apiCall(
        "POST",
        `/gameData/`,
        false,
        { "usernameA" : usernameAString, "usernameB" : usernameBString }
    );

    if (response.status == 404) {

    }
    let responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
}

export async function loadAGame(gameIDString: String) {
    const response = await apiCall(
        "GET",
        `/gameData/${gameIDString}`,
        false,
        {  }
    );

    if (response.status == 404) {

    }
    let responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
}