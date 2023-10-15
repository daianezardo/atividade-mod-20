const mdc = require ('./mdc')

test('MDC', () => {
  expect(mdc(21, 30)).toBe(3);
});