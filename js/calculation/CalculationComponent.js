class CalculationComponent {
    constructor() {
        // bind our document to the variable $
        let $ = document.querySelector.bind(document);
        let calculation = new Calculation();
        this._httpService = new HttpService();

        // View inputs
        this._hourlyWageInput = $("#hourlyWage");
        this._workedHoursInput = $("#workedHours");
        this._calculateButton = $("#calculateButton");
        this.calculationList = new Bind(
            new CalculationView($("#calculationView")),
            new CalculationList(),
            'add', 'calculations'
        );

        this._hourlyWageInput.value = calculation.hourlyWage;
        this._workedHoursInput.value = calculation.workedHours;

        this._message = new MessageComponent($("#messageView"));
        this.fetchCalculations();
    }

    onCalculateButtonClick() {
        this._httpService.request(constants.CALCULATIONS_URL, 'POST', new Calculation(this._hourlyWageInput.value, this._workedHoursInput.value))
            .then(() => {
                Temp.message(this._message, "Calculation included with success.", "success", 3000);
                return this.fetchCalculations();
            })
            .catch((err) => console.log(err));
    }

    fetchCalculations() {
        this._httpService.request(constants.CALCULATIONS_URL, 'GET')
            .then((calculations) => {
                this.calculationList.calculations =
                    calculations.map((c) => new Calculation(c._hourlyWage, c._workedHours));
            })
            .catch((err) => console.log(err));
    }
}