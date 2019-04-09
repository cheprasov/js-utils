// @flow

import TypeUtils from './TypeUtils';

export default class FormatUtils {

    static formatNumber(
        value: number | string,
        separator: string = ',',
        sepLength: number = 3,
        decimalSeparator: string = '.',
        decimalLength: null | number = null,
    ): string {
        const num = TypeUtils.isNumber(value) ? value : Number(value);
        const valueParts = String(decimalLength !== null ? num.toFixed(decimalLength) : num).split('.');
        valueParts[0] = valueParts[0].replace(new RegExp(`(\\d)(?=(\\d{${sepLength}})+$)`, 'g'), `$1${separator}`);
        return valueParts.join(decimalSeparator);
    }

}
