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
        requestAnimationFrame((ts) => this.loop(ts));
    }

    private lastTime: number = 0;

    private loop(timestamp: number) {
        if (!this.lastTime) this.lastTime = timestamp;
        
        let dt = (timestamp - this.lastTime) / 1000;
        
        // Prevent giant spikes when changing tabs
        if (dt > 0.1) dt = 0.1;
        
        this.lastTime = timestamp;

        this.state.update(dt);
        this.screen.renderScreen();
        requestAnimationFrame((ts) => this.loop(ts));
    }
}

const main = new Main();