import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LogoutButton } from '../logoutButton/LogoutButton';

interface LobbyState {
    //lobbies: Lobby[];
}

export class Lobby extends React.Component<RouteComponentProps, LobbyState> {
    
    state = { 
        //lobbies: Lobby[]
    };
  
    render() {
      return (
        <div>
            {LogoutButton}
        </div>
      );
    }
}
  