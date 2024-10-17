//Number shortner
import numeral from "numeral";

export function fShortenNumber(number) {
    return numeral(number).format("0a");
}

export function fPostfixNumber(number) {
    return numeral(number).format("0.0a");
}