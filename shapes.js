// make shape classes

class Shape {
    constructor (text, textColor, shape, background) {
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.background = background
    }
}

class Circle extends Shape {
    constructor (text, textColor, shape, background) {
        super (text, textColor, shape, background)
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${shape} cx="150" cy="100" r="80" fill="${background}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
}

class Square extends Shape {
    constructor (text, textColor, shape, background){
        super (text, textColor, shape, background)
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${shape} x="90" y="40" width="120" height="120" fill="${background}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
}

class Triangle extends Shape {
    constructor (text, textColor, shape, background){
        super (text, textColor, shape, background)
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${shape} points="150, 18 244, 182 56, 182" fill="${background}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`
    }
}

module.exports = {Circle, Square, Triangle}