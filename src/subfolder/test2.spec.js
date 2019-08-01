const supertest = require('supertest');
const { test2Method } = require('./test2');

describe('my tests', () => {
    it('should pass', () => {
        supertest(() => { });
        expect(test2Method()).toBe(true);
    });

    it('should pass2', () => {
        supertest(() => { });
        expect(test2Method()).toBe(true);
    });
})

describe('my second tests', () => {
    it('should pass', () => {
        supertest(() => { });
        expect(test2Method()).toBe(true);
    });

    it('should pass2', () => {
        supertest(() => { });
        expect(test2Method()).toBe(true);
    });
});