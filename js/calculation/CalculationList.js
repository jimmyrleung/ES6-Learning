class CalculationList {
    constructor() {
        this._calculations = [];
    }

    add(calculation) {
        this._calculations.push(calculation);
    }

    set calculations(calculations) {
        this._calculations = calculations;
    }

    get calculations() {
        // We use the spread operator to return a copy of our calculation instead of the
        // calculations itself
        return [...this._calculations];
    }
}