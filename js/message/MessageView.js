class MessageView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        console.log(model.text);
        return (model.text) ?
            `<div class="card-panel blue lighten-2">
                <span class="white-text">
                    <i class="material-icons valign-wrapper right pointer">close</i>
                    ${model.text}
                </span>
        </div>` : "";
    }
}