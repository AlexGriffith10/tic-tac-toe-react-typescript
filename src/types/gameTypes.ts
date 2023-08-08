// export type CurrentMovesType = {
//     [key: number]: PlayerValues
// }

export type CurrentMovesType = {
    square: number
    move: PlayerValues
}

export enum PlayerValues {
    PLAYERONE = 'X',
    PLAYERTWO = 'O',
    OPEN = 'OPEN',
}