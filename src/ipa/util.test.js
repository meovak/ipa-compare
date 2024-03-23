import { fromNumber } from './util';

describe('fromDecimal', function () {
  test.each([
    { input: 112, want: 'p' },
    { input: 429553418898, want: 'd͡ʒ' },
    { input: '429553418898', want: 'd͡ʒ' },
    { input: 0x006403610292, want: 'd͡ʒ' },
  ])('fromDecimal($.input)', function ({ input, want }) {
    expect(fromNumber(input)).toBe(want);
  });
});
