const { Circle, Square, Triangle } = require("./shapes")

describe('Circle', () => {
    test('Should render a red circle logo', () => {
        const shape = new Circle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
    });
});

describe('Triangle', () => {
    test('Should render a blue triangle logo', () => {
        const shape = new Triangle();
        let color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
    });
});


describe('Square', () => {
    test('Should render a yellow square logo', () => {
        const shape = new Square();
        let color = ('yellow')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
});
