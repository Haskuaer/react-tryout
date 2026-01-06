import styles from './Board.module.css'
import cross from '../assets/figures/cross.png'
import circle from '../assets/figures/circleNew.png'

function Field(props) {

    const { value, onClick } = props;

    return (
        <div className={styles.field} onClick={onClick}>
            {value === "cross" && <img className={styles.cross} src={cross}></img>}
            {value === "circle" && <img className={styles.circle} src={circle}></img>}
        </div>
    )
}

export default Field