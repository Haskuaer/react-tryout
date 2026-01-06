import { Link } from 'react-router-dom'
import styles from './MainMenu.module.css'

function MainMenu() {

    return (
        <>
            <nav className={styles.mainMenu}>
                <Link to="/">Home</Link> | {" "}
                <Link to="/calculator">Calculator</Link> | {" "}
                <Link to="/stoper">Stoper</Link> | {" "}
                <Link to="/tic-tac-toe">Tic Tac Toe</Link> | {" "}
            </nav>
        </>
    )
}

export default MainMenu