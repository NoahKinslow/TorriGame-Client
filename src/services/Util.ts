import { apiHost, apiPath, apiPort } from '../Config';
import { getLoginToken } from './Session';

export function apiCall(method: string, path: string, authenticate: boolean, body?: object): Promise<Response> {
    const url = `http://${apiHost}:${apiPort}${apiPath}${path}`;

    const headers: any = { };
    if (body) {
        headers["Content-Type"] = "application/json";
    }
    if (authenticate) {
        headers["Authorization"] = "Bearer " + getLoginToken();
    }

    const options: any = { method, headers, mode: "cors" };
    if (body) {
        options.body = JSON.stringify(body);
    }

    return fetch(url, options);
}