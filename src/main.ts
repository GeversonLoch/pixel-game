import { Screen } from "./screen";
import { State } from "./state";
import { Input } from "./imput";

export class Main {

    public state: State;
    public screen: Screen;
    public input: Input;

    constructor() {
        this.state = new State(this);
        this.screen = new Screen(this);
        this.input = new Input(this);
    }

}

const main = new Main();