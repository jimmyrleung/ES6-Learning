class Bind {
    /**
     * The class 'Bind' is responsible for creating a data-binding between a view and a model.
     * It also receive the properties that will trigger the view update based on the model.
     * 
     * @param {*} view the view that will be updated according to a model
     * @param {*} model the model that will be attached to the view
     * @param {*} props the properties that will trigger the view atualization based on the model
     */
    constructor(view, model, ...props) {
        let proxy = ProxyFactory.create(model, props, model => view.update(model));

        view.update(model);

        return proxy;
    }
}