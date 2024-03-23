import { splitEvery } from 'ramda';

export function fromNumber(number) {
  const hex = Number(number).toString(16);
  const filled = fill16bits(hex);
  const decimals = splitEvery(4, filled).map((bytes) =>
    Number.parseInt(bytes, 16)
  );
  return String.fromCharCode(...decimals);

  function fill16bits(hex) {
    const toFilled = 4 - (hex.length % 4);
    return hex.padStart(toFilled + hex.length, '0');
  }
}
