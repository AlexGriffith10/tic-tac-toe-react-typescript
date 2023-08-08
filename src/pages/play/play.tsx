import { useState } from 'react'
import { Board } from '../../components/board/board'
import { Title } from '../../components/title/title'
import { PlayerValues } from '../../types/gameTypes'

export const Play: React.FC = () => {
    const [currentPlayer, setCurrentPlayer] = useState<PlayerValues>(PlayerValues.PLAYERONE)
    const [isWinner, setIsWinner] = useState<boolean>(false)
    // const [lastMovePlayer, setLastMovePlayer] = useState<PlayerValues>(PlayerValues.OPEN)
    const setNewPlayer = (newPlayer: PlayerValues) => {
        // setLastMovePlayer(currentPlayer)
        setCurrentPlayer(newPlayer)
    }
    const setWinner = (winnerFound: boolean) => {
        setIsWinner(winnerFound)
    }
    return(
        <>
            <Title titleContent={isWinner ? `Player ${currentPlayer} wins!` : `Play Tic Tac Toe Player ${currentPlayer} turn`} />
            <Board currentPlayer={currentPlayer} setCurrentPlayer={setNewPlayer} isWinner={isWinner} setWinner={setWinner} />
        </>
    )
}