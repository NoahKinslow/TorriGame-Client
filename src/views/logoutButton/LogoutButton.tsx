import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { clearLoginToken } from '../../services/Session';



export class LogoutButton extends React.Component<RouteComponentProps> {
    
    logout = (evt: any) =>  {
        clearLoginToken();
        this.props.history.push("/login");
    }

    render() {
        return (
            <input type="button" value="Logout" onClick={this.logout}/>
        ); 
    } 
}