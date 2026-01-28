import { useState, useEffect } from 'react'
import styles from './Calculator.module.css'
import { BUTTONS, TYPES } from '@constants/buttons'

function Calculator() {

    const [display, setDisplay] = useState('0');
    const [dot, setDot] = useState(false);
    const [minus, setMinus] = useState(false);
    const [mem, setMem] = useState(null);
    const [operation, setOperation] = useState(null);

    const handlePress = (value, type) => {

        switch (type) {
            case TYPES.ACTION:

                if (value === 'clear') setDisplay('0')
                if (value === 'clearEverything') {
                    setDisplay('0')
                    setMem(null)
                    setOperation(null)
                    setDot(false)
                    setMinus(false)
                }
                if (value === 'backspace') setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0')
                if (value === '=') setDisplay(calculate)
                break;

            case TYPES.NUMBER:

                if (/^\d$/.test(value)) handleNumber(value)
                break;
            
            case TYPES.OPERATOR:

                setOperation(prev => {

                    if (prev !== null) return value // Change only operator if its already set

                    setOperation(value)
                    setMem(display)
                    setDisplay('0');
                });
                break;

            case TYPES.SIGN:
                    
                if (value === '.') {
                    if (!dot) { 
                        setDot(true) 
                        setDisplay(prev => prev + value) 
                    }
                }

                if (value === 'sign') {
                    setDisplay(prev => {
                        if (prev === '0') return prev
                        if (minus) {
                            setMinus(false);
                            return prev.slice(1)
                        } else {
                            setMinus(true);
                            return '-' + prev
                        }
                    })
                }
                break;
            default:
                setDisplay('ERROR');
        }
    }

    // useEffect(() => {
    //     console.log(`Operator set: ${operation}`)
    // }, [operation])

    // useEffect(() => {
    //     console.log(`Memory set: ${mem}`)
    // }, [mem])

    const handleNumber = (digit) => {

        setDisplay(prev => {
            if (prev === '0') return digit
            if (prev.length >= 13) return prev
            return prev + digit
        })
    }

    const calculate = () => {

        let result = null

        switch(operation) {
            case '+':
                result = Number(mem) + Number(display)
                break;
            default:
                result = 0
        }

        return result
    }

    const handleEquationDisplay = () => {

        if (operation.length < 2) return `${mem} ${operation[0] }`
        if (operation.length == 2) return `${mem} ${operation[0]} ${display} =`
    }

    return (
        <div className={styles.calculator}>
            <div className={`${styles.displayBase} ${styles.equationDisplay}`}>
                {operation ? `${mem} ${operation} ` : ''}
            </div>
            <div className={`${styles.displayBase} ${styles.display}`}>
                {display}
            </div>
            <div className={styles.buttons}>
                { BUTTONS.map(({label, value, type}) => {
                    return (
                        <button 
                            key={label} 
                            value={value}
                            type={type}
                            onClick={ () => handlePress(value, type) }
                        >{label}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Calculator