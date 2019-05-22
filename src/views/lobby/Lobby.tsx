import React from 'react';

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

    connectToLobby() {

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