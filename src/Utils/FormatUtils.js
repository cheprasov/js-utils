// @flow

export default class FormatUtils {

    static formatNumber(
        value: number | string,
        separator: string = ',',
        sepLength: number = 3,
        decimalSeparator: string = '.',
        decimalLength: null | number = null,
    ): string {
        let strValue: string;
        if (decimalLength !== null) {
            strValue = Number(value).toFixed(decimalLength).toString();
        } else {
            strValue = String(value);
        }
        const strValueParts: string[] = strValue.split('.');
        strValueParts[0] = strValueParts[0].replace(
            new RegExp(`(\\d)(?=(\\d{${sepLength}})+$)`, 'g'),
            `$1${separator}`,
        );
        return strValueParts.join(decimalSeparator);
    }

}
