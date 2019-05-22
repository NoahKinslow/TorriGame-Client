import React, { ChangeEvent, FormEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import { performLogin } from '../../services/Login';
import { checkPassword, checkAccountAvailable, registerAccount } from '../../services/API';

interface LoginState {
    username: String;
    password: String;
    error: String | undefined;
}


export class Login extends React.Component<RouteComponentProps, LoginState> {

    state = {
        username: "",
        password: "",
        error: undefined,
    };
  
    attemptLogin = async (event: any) => {
        const result = await checkPassword(this.state.username, this.state.password);

        if (result) {
            await performLogin(this.state.username);
            this.props.history.push("/lobby");
        }
        else {
            this.setState({ error: "Invalid login" });
        }
    }

    attemptRegistration = async (event: any) => {
        const result = await checkAccountAvailable(this.state.username);

        if (result) {
            await registerAccount(this.state.username, this.state.password);
            await performLogin(this.state.username);
            this.props.history.push("/lobby");
        }
        else {
            this.setState({ error: "Account taken" });
        }
    }
  
    updateUsername = (evt: ChangeEvent<HTMLInputElement>) => {
        this.setState({ username: evt.currentTarget.value});
    }
  
    updatePassword = (evt: ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: evt.currentTarget.value});
    }
  
    render() {
        return (
        <div>
            <h1>Login</h1>
            <form>
                Username: <input type="text" placeholder="Username" onChange={this.updateUsername}/>
                Password: <input type="password" placeholder="Password" onChange={this.updatePassword}/>
                <span>{this.state.error}</span>
                <input type="button" value="Login" onClick={this.attemptLogin}/>
                <input type="button" value="Register" onClick={this.attemptRegistration}/>
            </form>
        </div>
        );
    }
  }
  