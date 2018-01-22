class MessageView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        return (model.text) ?
            `<div id="messageViewContent" class="card-panel ${model.stateClass}">
                <span class="white-text">
                    ${model.text}
                </span>
        </div>` : "";
    }
}