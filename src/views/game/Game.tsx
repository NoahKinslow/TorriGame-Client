import React from 'react';
import { Tile } from './Tile';
import { loadAGame } from '../../services/API';
import { GameModel } from '../../types';

interface GameState {
    gameStrings: (string | String[])[];
}

interface GameProps {
    gameID: String
}

export class Game extends React.Component<GameProps, GameState> {
    
    constructor(props: GameProps) {
        super(props)

        this.getGameData();
    }

    getGameData = async () => {
        let gameData = await loadAGame(this.props.gameID);
        if (gameData) {
            let gameStateStrings = (gameData as GameModel).gameStateStrings;
            this.setState({ gameStrings: gameStateStrings });
        }
    }

    render() {
      return (
        <>
            <table>
                <tr>
                    <td> </td>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                    <td>E</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                    <td><Tile></Tile></td>
                </tr>
            </table>            
        </>
        );
    }
}