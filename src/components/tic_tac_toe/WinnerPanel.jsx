import { createPortal } from 'react-dom'
import styles from './WinnerPanel.module.css'

function WinnerPanel({winner, resetGame}) {

    if (!winner) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Congratulations!</h2>
                <p>Winner is: <b>{winner}</b></p>
                <button className={styles.playAgainBtn} onClick={resetGame}>Play Again</button>
            </div>
        </div>,
        document.body
    )
}

export default WinnerPanel