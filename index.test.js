// index.test.js
const holaMundo = require('./index');

test('Debería retornar "Hola, mundo!"', () => {
    expect(holaMundo()).toBe("Hola, mundo!");
});