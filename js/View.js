class View {

    constructor(element) {

        this._element = element;
    }

    /**
     * This method returns a formatted HTML with a given model.
     */
    template() {
        throw new Error(`The 'template' method must be implemented.`);
    }

    /**
     * This method updates the view with a given model.
     * @param {*} model The model that will be shown on the view. It must be a formatted HTML.
     */
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}