const { test2Method } = require('./test2');

describe('my tests', () => {
    it('should pass', () => {
        expect(test2Method()).toBe(true);
    });

    it('should pass2', () => {
        expect(test2Method()).toBe(true);
    });
});