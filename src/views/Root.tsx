import React, { ComponentType } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { getLoginToken } from '../services/Session';
import { Login } from './login/Login';
import { Lobby } from './lobby/Lobby';
import { NotFound } from './notFound/notFound';

export function Root() {
    return (
        <Router basename="/">
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/lobby" exact render={requireLogin(Lobby)}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

function requireLogin(Component: ComponentType<any>) {
    return (props: RouteComponentProps) => {
        const token = getLoginToken();
        if (!token) {
            return <Redirect to="/login"/>;
        }
        else {
            return <Component {...props}/>;
        }
    };
}