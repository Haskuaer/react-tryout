import { useState, useEffect } from 'react'
import styles from './Calculator.module.css'
import { BUTTONS, TYPES } from '@constants/buttons'

function Calculator() {

    const [acc, setAcc] = useState(null)
    const [display, setDisplay] = useState('0')
    const [dot, setDot] = useState(false)
    const [equationDisplay, setEquationDisplay] = useState('')
    const [operator, setOperator] = useState(null)
    const [opposite, setOpposite] = useState(false)

    const clearStates = () => {
        setAcc(null)
        setDisplay('0')
        setDot(false)
        setEquationDisplay('')
        setOperator(null)
        setOpposite(false)
    }

    const handlePress = (value, type) => {

        switch (type) {
            case TYPES.ACTION:
                handleAction(value)
                break

            case TYPES.NUMBER:
                if (/^\d$/.test(value)) handleNumber(value)
                break

            case TYPES.OPERATOR:
                handleOperator(value)
                // setOperator(prev => {

                //     if (prev !== null) return value // Change only operator if its already set

                //     setOperator(value)
                //     setMem(display)
                //     setDisplay('0');
                // });
                break

            case TYPES.SIGN:
                handleSign(value)
                break

            default:
                setDisplay('ERROR');
        }
    }

    const handleAction = (value) => {

        if (value === 'clear') {
            setDot(false)
            setOpposite(false)
            return setDisplay('0')
        }
        if (value === 'clearEv') return clearStates()
        if (value === 'backspace') {
            // TODO: Handle dot state and opposite state
            return setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0')
        }
        if (value === '=') return setDisplay('In progress')
    }



    const handleNumber = (digit) => {

        setDisplay(prev => {
            if (prev === '0') return digit
            if (prev.length >= 13) return prev
            return prev + digit
        })
    }

    const handleSign = (value) => {

        if (value === '.') return handleDot()
        if (value === 'opposite') return handleOpposite()
    }

    const handleDot = () => {

        if (dot) return
        setDot(true)
        return setDisplay(prev => prev + '.')
    }

    const handleOpposite = () => {

        if (display === '0' || display === '0.') return
        if (opposite) {
            setOpposite(false)
            return setDisplay(prev => prev.slice(1))
        } else {
            setOpposite(true)
            return setDisplay(prev => '-' + prev)
        }
    }

    const handleOperator = (op) => {

        const current = Number(display)

        if (operator !== null) {
            setEquationDisplay(prev => {
                prev.slice(0, -2)
                return `${prev} ${op}`
            })
            return setOperator(op)
        }

        if (acc === null) {
            setAcc(current)
            setEquationDisplay(`${current} ${op}`)
            setOperator(op)
            setDisplay('0')
        } else {
            const result = calculate(acc, current, operator)
            setAcc(result)
            setDisplay(String(result))
            setEquationDisplay(prev => `${prev} ${current}`)
        }
    }

    // Is it neccessery?
    const handleMemory = () => {

    }

    const handleDisplay = (value, index) => {

    }

    const handleEquationDisplay = () => {

    }

    const calculate = (a, b, operator) => {

        switch (operator) {
            case '+': return a + b
            case '-': return a - b
            case '×': return a * b
            case '÷': return b === 0 ? 'Error' : a / b
            default: return b
        }
    }

    useEffect(() => {
        console.log(acc)
    }, [acc])

    return (
        <div className={styles.calculator}>
            <div className={`${styles.displayBase} ${styles.equationDisplay}`}>
                {equationDisplay}
            </div>
            <div className={`${styles.displayBase} ${styles.display}`}>
                {display}
            </div>
            <div className={styles.buttons}>
                {BUTTONS.map(({ label, value, type }) => {
                    return (
                        <button
                            key={label}
                            value={value}
                            type={type}
                            onClick={() => handlePress(value, type)}
                        >{label}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Calculator