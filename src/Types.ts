export interface LobbyData {
    opponentName: String;
    opponentID: String;
    myPlayerID: String;
}

export interface GameModel {
    gameID: String;
    players: String[];
    gameStateStrings: (string | String[])[];
}