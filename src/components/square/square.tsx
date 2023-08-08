import  { PlayerValues } from '../../types/gameTypes'
import styles from './square.module.css'

export type SquareProps = {
    id: number
    isDisabled: boolean
    recordTurn : (id: number) => void
    hasValue : (id: number) => PlayerValues
}

export const Square: React.FC<SquareProps> = ({id, isDisabled, recordTurn, hasValue}) => {
    return (
        <button className={styles.square} disabled={isDisabled} onClick={() => {recordTurn(id)}}>
            {hasValue(id)}
        </button>
    )
}