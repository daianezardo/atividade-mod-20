var somaMultiplos = require ('./soma')

test('Soma dos múltiplos de 7 e 5', () => {
  expect(somaMultiplos()).toBe(156361);
});