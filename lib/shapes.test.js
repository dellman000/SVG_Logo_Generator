const { Circle, Shape, Triangle, Square } = require('../lib/shapes');

describe('Render Function', () => {
  test('create blue Triangle with Text', () => {
    const shape = new Triangle();
    shape.setFillColor("blue");
    shape.setText('SVG')
     shape.setTextColor('white')
    expect(shape.render()).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    expect(shape.render()).toContain(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>`);
  });
  test('create green Circle', () => {
    const shape = new Circle();
    shape.setFillColor("green");
     shape.setText('DOG')
     shape.setTextColor('orange')
    expect(shape.render()).toContain('<circle cx="150" cy="100" r="80" fill="green" />');
    expect(shape.render()).toContain(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">DOG</text>`);
  });
  test('create orange Square', () => {
    const shape = new Square();
    shape.setFillColor("orange");
    // shape.setText('SVG')
    // shape.setTextColor('white')
    expect(shape.render()).toContain('<rect width="100%" height="100%" fill="orange" />');
  });

});

