class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(colorVar) {
        this.color = colorVar;
    };

    render() {
        throw new Error('Render method must be implmented in child class');
    }
}

class Triangle extends Shape {
    constructor(base, height, color) {
        super(color);
        this.base = base;
        this.height = height;
    }
    render () {
        return `<svg width="${this.base}" height="${this.height}">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      </svg>`;
    }
}

class Square extends Shape {
    constructor(size, color) {
        super(color);
        this.size = size;
    }
    render () {
        return `<svg width="${this.side}" height="${this.side}">
        <rect width="${this.side}" height="${this.side}" fill="${this.color}" />
      </svg>`;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render () {
        return `<svg width="${2 * this.radius}" height="${2 * this.radius}">
        <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
      </svg>`;
    }
}
    
module.exports = { Circle, Triangle, Square };