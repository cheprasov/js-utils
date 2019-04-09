import FormatUtils from './FormatUtils';

describe('FormatUtils', () => {

    describe('formatNumber', () => {
        it('should format number by default', () => {
            expect(FormatUtils.formatNumber(123456)).toEqual('123,456');
            expect(FormatUtils.formatNumber(123456.789)).toEqual('123,456.789');
            expect(FormatUtils.formatNumber(123)).toEqual('123');
            expect(FormatUtils.formatNumber(10000000)).toEqual('10,000,000');
            expect(FormatUtils.formatNumber(-42000.42)).toEqual('-42,000.42');
        });

        it('should format number with params', () => {
            expect(FormatUtils.formatNumber(123456, '_')).toEqual('123_456');
            expect(FormatUtils.formatNumber(123456.789, '_', 2)).toEqual('12_34_56.789');
            expect(FormatUtils.formatNumber(-123456.789, '_', 2)).toEqual('-12_34_56.789');
            expect(FormatUtils.formatNumber(123456.789, '.', 1, ':', 2)).toEqual('1.2.3.4.5.6:79');
            expect(FormatUtils.formatNumber(-123456.789, '.', 1, ':', 2)).toEqual('-1.2.3.4.5.6:79');
            expect(FormatUtils.formatNumber(10000000, ' ', undefined, '.', 2)).toEqual("10 000 000.00");
            expect(FormatUtils.formatNumber(10000000, ' ', 4, '.', 2)).toEqual("1000 0000.00");
            expect(FormatUtils.formatNumber(10000000.42, '_', 3, '.', 0)).toEqual("10_000_000");
            expect(FormatUtils.formatNumber(10000000.55, '', 1, '.', 0)).toEqual("10000001");
            expect(FormatUtils.formatNumber(42.42, ',', 1, '.', 4)).toEqual("4,2.4200");
        });

        it('should allow to use string', () => {
            expect(FormatUtils.formatNumber('123456', '_')).toEqual('123_456');
            expect(FormatUtils.formatNumber('123456.789', '_', 2)).toEqual('12_34_56.789');
            expect(FormatUtils.formatNumber('-123456.789', '_', 2)).toEqual('-12_34_56.789');
            expect(FormatUtils.formatNumber('123456.789', '.', 1, ':', 2)).toEqual('1.2.3.4.5.6:79');
            expect(FormatUtils.formatNumber('-123456.789', '.', 1, ':', 2)).toEqual('-1.2.3.4.5.6:79');
            expect(FormatUtils.formatNumber('10000000', ' ', undefined, '.', 2)).toEqual("10 000 000.00");
            expect(FormatUtils.formatNumber('10000000', ' ', 4, '.', 2)).toEqual("1000 0000.00");
            expect(FormatUtils.formatNumber('10000000.42', '_', 3, '.', 0)).toEqual("10_000_000");
            expect(FormatUtils.formatNumber('10000000.55', '', 1, '.', 0)).toEqual("10000001");
            expect(FormatUtils.formatNumber('42.42', ',', 1, '.', 4)).toEqual("4,2.4200");
        });
    });

});
