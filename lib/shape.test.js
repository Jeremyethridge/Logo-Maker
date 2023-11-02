const { Triangle, Square, Circle } = require("./shapes.js");

describe('Triangle class', () => {
    test('test for a triangle with a black background', () => {
      const shape = new Triangle(200, 150, 'black');
      const rendered = shape.render();
      expect(rendered).toContain('<polygon');
      expect(rendered).toContain('points=');
      expect(rendered).toContain('fill="black"');
    });
  });
  
  // Test Square class
  describe('Square class', () => {
    test('test for a square with a green background', () => {
      const shape = new Square(100, 'green');
      const rendered = shape.render();
      expect(rendered).toContain('<rect');
      expect(rendered).toContain('width=');
      expect(rendered).toContain('height=');
      expect(rendered).toContain('fill="green"');
    });
  });
  
  // Test Circle class
  describe('Circle class', () => {
    test('test for a circle with a turquoise background', () => {
      const shape = new Circle(50, 'turquoise');
      const rendered = shape.render();
      expect(rendered).toContain('<circle');
      expect(rendered).toContain('cx=');
      expect(rendered).toContain('cy=');
      expect(rendered).toContain('r=');
      expect(rendered).toContain('fill="turquoise"');
    });
  });