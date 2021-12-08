import { addTwoNumbers, subtractTwoNumbers } from '../src/index';

describe('Index tests: ', () => {
  test('addTwoNumbers 1 + 2 to equal 3', () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
  });

  test('addTwoNumbers 1 + 2 to equal 3', () => {
    expect(subtractTwoNumbers(1, 2)).toBe(-1);
  });
});
