class Validators {
    static isFunction(fn, literal) {
        return (literal) ? typeof (fn) === typeof (Function) : typeof (fn) == typeof (Function);
    }
}