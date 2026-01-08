import { useState } from 'react'
import styles from './Calculator.module.css'
import BUTTONS from '@constants/buttons'

function Calculator() {

    const [display, setDisplay] = useState('0');

    const handlePress = (value) => {
        setDisplay(prev => prev === '0' ? value : prev + value);
    }

    return (
        <div className={styles.calculator}>
            <div className={styles.display}>
                {display}
            </div>
            <div className={styles.buttons}>
                { BUTTONS.map(({label, value}) => {
                    return (
                        <button 
                            key={label} 
                            value={value}
                            onClick={ () => handlePress(value) }
                        >{label}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Calculator