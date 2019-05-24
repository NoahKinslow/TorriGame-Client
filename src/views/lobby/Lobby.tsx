import React from 'react';
import { startAGame, loadAGame } from '../../services/API';
import { getLoginToken } from '../../services/Session';

interface LobbyState {
    
}

interface LobbyProps {
    opponentName: String;
    opponentID: String;
    myPlayerID: String;
}

export class Lobby extends React.Component<LobbyProps, LobbyState> {

    constructor(props: LobbyProps) {
        super(props);
    }

    connectToLobby = async (event: any) =>  {
        let newGame = await startAGame(getLoginToken() as String, this.props.opponentName);
        if (newGame) {
            let gameID = newGame.gameID;
            // Send user to game page
            
        }
    }
  
    render() {
      return (
        <>
          <tr>
              <td onClick={this.connectToLobby}>{this.props.opponentName}</td>
          </tr>
        </>
      );
    }
}