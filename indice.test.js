
var { indices } = require('./indice')

describe('Testes dos indices', () => {
    it('Calculos dos índices de maior de menor valor', () => {
        var number = [15, 22, 3, 96, 44, 55, 26, 34, -7, 12, 77, 48, 194, 64];
        var indice = indices(number);

        expect(indice.result).toBe(194);
        expect(indice.result2).toBe(-7); 

    });
}); 
