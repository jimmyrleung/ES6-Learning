class ProxyFactory {
    /**
     * The 'create' method creates a Proxy to intercept 'actions', this is why it validates 
     * if the prop is a function.
     * If you also want to intercept 'gets' in properties that aren't a function, you should add
     * a parameter to inform that you should or shouldn't validate if the property is a function,
     * like: create(obj, props, action, onlyFunctions)
     * @param {*} obj The object that will be wrapped
     * @param {*} props The object's properties that will trigger our trap or traps
     * @param {*} action The action that might be executed when a trap is triggered
     */
    static create(obj, props, action) {
        return new Proxy(obj, {
            get: function (target, prop, receiver) {
                if (props.includes(prop) && Validators.isFunction(target[prop], false)) {
                    return function () {
                        // Execute the intercepted function
                        Reflect.apply(target[prop], target, arguments);

                        // Execute our trap. Our trap will be the view update, so need to pass
                        // a model as a parameter and our model will be the target itself.
                        action(target);
                    }
                }

                // If it isn't a property that we want to intercept we only return the object property value.
                return target[prop];
            },

            // We also might intercept a set
            set: function (target, prop, value, receiver) {
                // Set the value into the property
                target[prop] = value;

                // Check if the property is a property that we want to intercept
                if (props.includes(prop)) {
                    // Execute our trap. Our trap will be the view update, so need to pass
                    // a model as a parameter and our model will be the target itself.
                    action(target);
                }

                // If it isn't a property that we want to intercept we only set the new value to the object property
                return target[prop];
            }
        });
    }
}