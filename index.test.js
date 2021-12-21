import {sum} from "./index.js"

// const actual = sum(2, 1)
// const expected = 3

// if (actual !== expected) {
//     throw new Error(`${actual} was not equal to ${expected}`)
// }


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 100 + 2 to equal 102', () => {
    expect(sum(100, 2)).toBe(102);
});
