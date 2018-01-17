class CalculationComponent {
    constructor() {
        // bind our document to the variable $
        let $ = document.querySelector.bind(document);
        let calculation = new Calculation();
        // View inputs
        this._hourlyWageInput = $("#hourlyWage");
        this._workedHoursInput = $("#workedHours");
        this._calculateButton = $("#calculateButton");
        this.calculationList = new Bind(
            new CalculationView($("#calculationView")),
            new CalculationList(),
            'add'
        );

        this._hourlyWageInput.value = calculation.hourlyWage;
        this._workedHoursInput.value = calculation.workedHours;
    }

    onCalculateButtonClick() {
        this.calculationList.add(new Calculation(this._hourlyWageInput.value, this._workedHoursInput.value));
    }
}