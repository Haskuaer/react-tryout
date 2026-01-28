export const TYPES = {
    ACTION: 'ACTION', // Do stuff (clear, clear everything, backspace, result)
    NUMBER: 'NUMBER', // 0-9
    OPERATOR: 'OPERATOR', // [+, -, *, /]
    SIGN: 'SIGN', // [., +/-]
}

export const BUTTONS = [
    { label: 'C', value: 'clear', type: TYPES.ACTION },
    { label: 'CE', value: 'clearEverything', type: TYPES.ACTION },
    { label: '←', value: 'backspace', type: TYPES.ACTION },
    { label: '÷', value: '÷', type: TYPES.OPERATOR },
    { label: '7', value: '7', type: TYPES.NUMBER },
    { label: '8', value: '8', type: TYPES.NUMBER },
    { label: '9', value: '9', type: TYPES.NUMBER },
    { label: '×', value: '×', type: TYPES.OPERATOR },
    { label: '4', value: '4', type: TYPES.NUMBER },
    { label: '5', value: '5', type: TYPES.NUMBER },
    { label: '6', value: '6', type: TYPES.NUMBER },
    { label: '-', value: '-', type: TYPES.OPERATOR },
    { label: '1', value: '1', type: TYPES.NUMBER },
    { label: '2', value: '2', type: TYPES.NUMBER },
    { label: '3', value: '3', type: TYPES.NUMBER },
    { label: '+', value: '+', type: TYPES.OPERATOR },
    { label: '.', value: '.', type: TYPES.SIGN },
    { label: '0', value: '0', type: TYPES.NUMBER },
    { label: '⁺/₋', value: 'sign', type: TYPES.SIGN },
    { label: '=', value: '=', type: TYPES.ACTION},
]