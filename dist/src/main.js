import { Screen } from "./screen";
import { State } from "./state";
import { Input } from "./imput";
var Main = /** @class */ (function () {
    function Main() {
        this.state = new State(this);
        this.screen = new Screen(this);
        this.input = new Input(this);
    }
    return Main;
}());
export { Main };
var main = new Main();
//# sourceMappingURL=main.js.map