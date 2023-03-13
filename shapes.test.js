const { Circle, Square, Triangle } = require('./shapes')

describe('Shapes', () => {
    describe('Circle', () => {
        it('using the Circle class constructor creates a new Circle', () => {
            const circle = new Circle();
            expect(circle).toEqual(new Circle());
        });
    })
    describe('Square', () => {
        it('using the Square class constructor creates a new Square', () => {
            const square = new Square();
            expect(square).toEqual(new Square());
        });
    })
    describe('Triangle', () => {
        it('using the Triangle class constructor creates a new Triangle', () => {
            const triangle = new Triangle();
            expect(triangle).toEqual(new Triangle());
        });
    })
})