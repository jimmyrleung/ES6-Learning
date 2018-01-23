class CalculationList {
    constructor() {
        this._calculations = [];
        this._isSortedAsc = false;
        this._currentSortingColumn = "";
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

    get currentSortingColumn() {
        return this._currentSortingColumn;
    }

    get isSortedAsc() {
        return this._isSortedAsc;
    }

    sort(column) {
        this._calculations.sort((a, b) =>
            (Validators.isFunction(a[column], false) ? a[column]() - b[column]() : a[column] - b[column])
        );
        
        this._isSortedAsc = true;
        this._currentSortingColumn = column;
    }

    sortDescending() {
        this._calculations.reverse();
        this._isSortedAsc = false;
    }
}