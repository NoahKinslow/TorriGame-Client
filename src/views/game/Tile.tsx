import React from 'react';

interface TileState {
    towerHeight: number,
    builder: String,
}

interface TileProps {
    
}

export class Tile extends React.Component<TileProps, TileState> {
    
    state = { 
        towerHeight: 0,
        builder: "_"
    };

    render() {
      return (
        <>
            <table>
                <tr>
                    <td>L: ${this.state.towerHeight}</td>
                    <td>B: ${this.state.builder}</td>
                </tr>
            </table>
        </>
        );
    }
}