import { Link } from 'react-router-dom'
import styles from './MainMenu.module.css'

function MainMenu() {

    return (
        <>
            <nav className={styles.mainMenu}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/calculator">Calculator</Link>
                <Link className={styles.link} to="/stoper">Stoper</Link>
                <Link className={styles.link} to="/tic-tac-toe">Tic Tac Toe</Link>
            </nav>
        </>
    )
}

export default MainMenu