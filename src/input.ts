import { Main } from "./main";

export class Input {

    private _activeKeys: { [key: string]: boolean } = {};

    constructor(
        private main: Main
    ) {
        document.addEventListener('keydown', (ev) => this._activeKeys[ev.key] = true);
        document.addEventListener('keyup', (ev) => this._activeKeys[ev.key] = false);
    }

    public get activeKeys() {
        return this._activeKeys;
    }

}
