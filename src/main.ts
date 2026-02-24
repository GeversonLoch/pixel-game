import { Screen } from "./screen";
import { State } from "./state";
import { Input } from "./input"; // Notice the corrected import

export class Main {

    public state: State;
    public screen: Screen;
    public input: Input;

    constructor() {
        this.state = new State(this);
        this.screen = new Screen(this);
        this.input = new Input(this);
        
        // Start the game loop
        requestAnimationFrame(() => this.loop());
    }

    private loop() {
        this.state.update();
        this.screen.renderScreen();
        requestAnimationFrame(() => this.loop());
    }
}

const main = new Main();