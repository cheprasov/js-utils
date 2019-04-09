// @flow

export default class TypeUtils {

    static isString(value: any): boolean {
        return typeof value === 'string';
    }

    static isNumber(value: any): boolean {
        return typeof value === 'number';
    }

    static isInteger(value: any): boolean {
        return this.isNumber(value) && (value | 0) === value;
    }

    static isInt(value: any): boolean {
        return this.isInteger(value);
    }
}
