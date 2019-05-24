import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Game } from './Game';

interface GamePageState {
  gameID: String;
}

interface GamePageProps {

}

export class GamePage extends React.Component<RouteComponentProps<{}> & GamePageProps, GamePageState> {
    
    constructor(props: RouteComponentProps<{}> & GamePageProps) {
      super(props);


    }

    componentDidMount() {
      const gameID = this.props.match.params;

    }

    render() {
      return (
        <>
            <Game gameID = {this.state.gameID}></Game>
        </>
        );
    }
}