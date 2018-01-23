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
            'add', 'calculations', 'sort', 'sortDescending'
        );

        this._hourlyWageInput.value = calculation.hourlyWage;
        this._workedHoursInput.value = calculation.workedHours;

        this._message = new MessageComponent($("#messageView"));
        this.fetchCalculations();
    };

    // TODO: this component shouldn't be concerned about how the 
    // message is shown or hidden
    showMessage(text, state) {
        this._message.show(text, state);
    };

    hideMessage() {
        this._message.hide();
    };

    onCalculateButtonClick() {
        this._httpService.request(constants.CALCULATIONS_URL, 'POST', new Calculation(this._hourlyWageInput.value, this._workedHoursInput.value))
            .then(() => {
                this.showMessage(constants.CALCULATION_CREATION_SUCCESS,
                    constants.TEMP_MESSAGE_STATE_SUCCESS);
                return this.fetchCalculations();
            })
            .catch((err) => {
                this.showMessage(constants.CALCULATION_CREATION_ERROR,
                    constants.TEMP_MESSAGE_STATE_ERROR);
                console.log(err);
            });
    };

    fetchCalculations() {
        this._httpService.request(constants.CALCULATIONS_URL, 'GET')
            .then((calculations) => {
                this.calculationList.calculations =
                    calculations.map((c) => new Calculation(c._hourlyWage, c._workedHours));
            })
            .catch((err) => {
                this.showMessage(constants.FETCH_CALCULATIONS_ERROR,
                    constants.TEMP_MESSAGE_STATE_ERROR);
                console.log(err);
            });
    };

    sort(column) {
        if (this.calculationList.isSortedAsc && this.calculationList.currentSortingColumn === column) {
            this.calculationList.sortDescending();
        }
        else {
            this.calculationList.sort(column);
        }
    };
}