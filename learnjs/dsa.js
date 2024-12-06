class Cookie {
    constructor(color){
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setColor() {
        this.color = color;
    }
}

let cookieOne = new Cookie('red');
let cookieTwo = new Cookie('green');

console.log(cookieOne.getColor());
;
