class Message {
    constructor() {
        this._text = "";
        this._state = "";
    };

    get text() {
        return this._text;
    };

    set text(text) {
        this._text = text;
    };

    get state() {
        return this._state;
    };

    set state(state) {
        this._state = state;
    };

    get stateClass() {
        switch (this._state) {
            case "success":
                return "blue lighten-2";
                break;
            case "error":
                return "red lighten-1"
                break;
            default:
                return "blue lighten-2";
        }
    };
}