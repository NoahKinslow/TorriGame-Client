import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LogoutButton } from '../logoutButton/LogoutButton';
import { Lobby } from './Lobby';
import { LobbyData } from '../../Types';
import { HostGameButton } from './HostGameButton';
import { getLoginToken } from '../../services/Session';

interface LobbiesState {
    lobbies: LobbyData[];
    myUsername: String;
}

export class Lobbies extends React.Component<RouteComponentProps, LobbiesState> {
    
    state = { 
        lobbies: [] as LobbyData[],
        myUsername: getLoginToken() as String
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
            <HostGameButton username={this.state.myUsername}/>
            <LogoutButton/>
          </div>
        </>
        );
    }
}
  