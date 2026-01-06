import { useState, useEffect } from 'react'
import styles from './Board.module.css'
import Field from './Field'
import WinnerPanel from './WinnerPanel'
import DIRECTIONS from '../constants/directions'

function Board() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [boardSize, setBoardSize] = useState(3);
    const [figure, setFigure] = useState("cross");
    const [lastIndex, setLastIndex] = useState(null);
    const [winner, setWinner] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function handleMove(index) {

        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = figure;

        setBoard(newBoard);
        setLastIndex(index);
        setFigure(prev => (prev === "cross" ? "circle" : "cross"));
    }

    function checkWinner(board, lastIndex){

        const k = boardSize;
        const n = board.length;
        const symbol = board[lastIndex];
        const directions = DIRECTIONS(k, n);

        if (!symbol) return null;

        for (const { step, edge } of directions) {

            let i = lastIndex;
            let count = 1;

            while(edge(i) && board[i + step] === symbol) {
                count++;
                i += step;
            }

            if (count === k) {

                return symbol;
            } 
        }

        return false;
    }

    function checkEdges(lastIndex) {

        for (const { step, edge } of directions) {
            console.log(`${step}: ${edge(lastIndex)}`);
        }
    }

    function resetGame() {
        setBoard(Array(9).fill(null));
        setWinner(null);
        setFigure("cross");
        setLastIndex(null);
    }

    useEffect(() => {
        if (winner) {
            console.log(`Winner updated: ${winner}`);
        }
    })

    useEffect(() => { 
        if (winner) return;

        const result = checkWinner(board, lastIndex);
        if (result) { setWinner(result); setIsOpen(true); }
    }, [board, winner]);

    return (
        <>
            <div className={styles.board}>
                { board.map((value, index) => <Field key={index} value={value} onClick={() => handleMove(index)}></Field>) }
            </div>
            <WinnerPanel winner={winner} resetGame={resetGame}/>
        </>
    )
}

export default Board;