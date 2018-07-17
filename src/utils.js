import {
    MULT,
    SUB,
    DIV,
    SUM
} from './operators.constants';

export const removeLastChar = str => str.slice(0, str.length - 1);
export const calc = (result, operator, operand) => {
    switch (operator) {
        case MULT: return result *= operand;
    }
};