class InnerText {
    constructor(text, color) {
        this.color = color;
        this.text = text;
    }
    render() {
        return `<text x="150" y="110" font-size="40" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
}

class SVG {
    constructor(shape, innerText) {
        this.shape = shape;
        this.innerText = innerText;
    }
    
    render() {
        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.innerText.render()}</svg>`;
        return svg;
    }
}

module.exports = { InnerText, SVG }