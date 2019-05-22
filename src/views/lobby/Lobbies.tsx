import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LogoutButton } from '../logoutButton/LogoutButton';
import { Lobby } from './Lobby';
import { LobbyData } from '../../Types';

interface LobbiesState {
    lobbies: LobbyData[];
}

export class Lobbies extends React.Component<RouteComponentProps, LobbiesState> {
    
    state = { 
        lobbies: [] as LobbyData[]
    };
  
    render() {
      return (
        <>
          <table>
            {
              this.state.lobbies.length === 0 ?
                <span>No lobbies available</span> :
                this.state.lobbies.map(lobby =>
                  <Lobby opponentName={lobby.opponentName} opponentID={lobby.opponentID} myPlayerID={lobby.myPlayerID}></Lobby>
                )
            }
          </table>
          <div>
            <LogoutButton/>
          </div>
        </>
        );
    }
}
  