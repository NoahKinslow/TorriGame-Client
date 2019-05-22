import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { clearLoginToken } from '../../services/Session';



function logoutButton({ history }: RouteComponentProps) {
    
    function logout() {
        clearLoginToken();
        history.push("/login");
    }

    return (
        <input type="button" value="Logout" onClick={logout}/>
    );
}

export const LogoutButton = withRouter(logoutButton);