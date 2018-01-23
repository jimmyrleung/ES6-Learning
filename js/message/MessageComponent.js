class MessageComponent {
    constructor(_element) {
        let message = new Message();

        let $ = document.querySelector.bind(document);
        this.message = new Bind(
            new MessageView(_element),
            message, 'text', 'state'
        );
    };

    show(text, state) {
        this.message.state = state;
        this.message.text = text;
    };

    hide() {
        this.message.text = "";
        this.message.state = "";
    };

    temporaryShow(text, state, timeout) {
        this.show(text, state);
        setTimeout(() => {
            this.hide();
        }, timeout);
    };
}