class MessageComponent {
    constructor(_element) {
        let message = new Message();

        let $ = document.querySelector.bind(document);
        this.message = new Bind(
            new MessageView(_element),
            message, 'text'
        );

        return this.message;
    }
}