import React from 'react';
import { hostAGame } from '../../services/API';

interface HostGameButtonState {
    
}

interface HostGameButtonProps {
    username: String;
}


export class HostGameButton extends React.Component<HostGameButtonProps, HostGameButtonState> {

    constructor(props: HostGameButtonProps) {
        super(props);
    }

    hostGame() {
        hostAGame(this.props.username);
    }
  
    render() {
      return (
        <button onClick={this.hostGame}>Host Game</button>
      );
    }
}

