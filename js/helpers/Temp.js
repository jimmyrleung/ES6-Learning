class Temp {
    static message(model, text, state, timeout) {
        model.state = state;
        model.text = text;
        setTimeout(() => {
            model.state = "";
            model.text = "";
        }, timeout);
    };
}