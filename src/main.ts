import { ScreenCore } from "./screen.core";
import { StateCore } from "./state.core";
import { InputCore } from "./imput.core";

export class Main {

    public state: StateCore;
    public screen: ScreenCore;
    public input: InputCore;

    constructor() {
        this.state = new StateCore(this);
        this.screen = new ScreenCore(this);
        this.input = new InputCore(this);
    }

}

const main = new Main();