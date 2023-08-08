import { useState } from 'react'
import { Square } from '../square/square'
import styles from './board.module.css'
import  { PlayerValues } from '../../types/gameTypes'
import { WINNING_LINES } from '../../constants/constants'

interface BoardProps {
    currentPlayer: PlayerValues
    isWinner: boolean
    setCurrentPlayer: (newPlayer: PlayerValues) => void
    setWinner: (winner: boolean) => void
}

export const Board: React.FC<BoardProps> = ({currentPlayer, isWinner, setCurrentPlayer, setWinner}) => {
    const [ currentMoves, setCurrentMoves ] = useState<Map<number, PlayerValues>>(new Map<number, PlayerValues>())

    const recordTurn = async(id: number) => {
        currentMoves.set(id, currentPlayer)
        setCurrentMoves(currentMoves)
        if(currentMoves.size > 4) {
            await checkForWinner(currentPlayer)
        }
        const winner = currentMoves.size > 4 ? await checkForWinner(currentPlayer) : false
        await changePlayer(winner)
    }

    const changePlayer = async(winner: boolean) => {
        if(!winner) {
            currentPlayer === PlayerValues.PLAYERONE ? await setCurrentPlayer(PlayerValues.PLAYERTWO) : await setCurrentPlayer(PlayerValues.PLAYERONE)
        }
    }

    const hasValue = (id: number) => {
        const value = currentMoves.get(id)
        return value ? value : PlayerValues.OPEN
    }

    const moreThanThreeMovesCheck = (playerSquares: number[], lineToCheck: number[]):boolean => {
        const squareMatches = playerSquares.map((square) => {
            return lineToCheck.includes(square)
        })
        const filterHits = squareMatches.filter((value) => value === true)

        return filterHits.length ===3 ? true : false
    }

    const checkSquares = (playerSquares: number[]) => {
        playerSquares.sort()
        const lineCheck = WINNING_LINES.map((winningLine) => {
            const checkLine:boolean = playerSquares.length === 3 ?
            JSON.stringify(winningLine) === JSON.stringify(playerSquares):
            moreThanThreeMovesCheck(playerSquares, winningLine)
            return checkLine
        })
        return lineCheck.find((element) => element === true)
    }

    const checkForWinner = (currentPlayer: PlayerValues):boolean => {
        const playerOneSquares: number[] = []
        const playerTwoSquares: number[] = []
        currentMoves.forEach((value, key) => {
            if(value === PlayerValues.PLAYERONE) {
                playerOneSquares.push(key)
            } else if(value === PlayerValues.PLAYERTWO) {
                playerTwoSquares.push(key)
            }
        })

        const checkForWinner = checkSquares(currentPlayer === PlayerValues.PLAYERONE ? playerOneSquares : playerTwoSquares)
        if(checkForWinner) {
            setWinner(true)
            return true
        }
        return false
    }

        return(
            <div className={styles.board}>
                <Square id={1} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner }/>
                <Square id={2} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
                <Square id={3} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
                <Square id={4} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
                <Square id={5} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
                <Square id={6} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
                <Square id={7} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
                <Square id={8} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
                <Square id={9} recordTurn={recordTurn} hasValue={hasValue} isDisabled={ isWinner } />
            </div>
        )
}
