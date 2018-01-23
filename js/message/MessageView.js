class MessageView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        // TODO: Refactor - It shouldn't be so coupled to the calculation component
        return (model.text) ?
            `<div id="messageViewContent" class="card-panel ${model.stateClass}">
                <span class="white-text">
                    <i class="material-icons valign-wrapper right pointer" onclick="calculationComponent.hideMessage();">close</i>
                    ${model.text}
                </span>
        </div>` : "";
    }
}