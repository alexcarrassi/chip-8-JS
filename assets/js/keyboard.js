class Keyboard {
    constructor() {
        console.log("keyboard")

        this.KEYMAP = {
            49 : 0x1,
            50 : 0x2,
            51 : 0x3,
            52 : 0xc,
            81 : 0x4,
            87 : 0x5,
            69 : 0x6,

            82 : 0xd,
            65 : 0x7,
            83 : 0x8,
            68 : 0x9,
            70 : 0xe,
            90 : 0xa,
            88 : 0x0,
            67 : 0xb,
            86 : 0xf
        }

        this.keysPressed = [];

        this.onNextKeyPress = null;

        window.addEventListener("keydown", this.onKeyDown.bind(this), false);
        window.addEventListener("keyup",   this.onKeyUp.bind(this), false);
    }

    isKeyPressed(keyCode) {
        return this.keysPressed[keyCode];
    }

    onKeyDown(e) {

        let key = this.KEYMAP[e.keyCode];
        this.keysPressed[key] = true;

        if(this.onNextKeyPress !== null && key) {
            this.onNextKeyPress(parseInt(key));
            this.onNextKeyPress = null;
        }


    }

    onKeyUp(e) {
        let key = this.KEYMAP[event.keyCode];
        this.keysPressed[key] = false;

        console.log(this.keysPressed);
    }
}

export default Keyboard;