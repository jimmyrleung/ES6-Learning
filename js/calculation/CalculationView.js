class CalculationView extends View {
    constructor(element) {
        super(element);
    }

    sortingIcon(isSortedAsc) {
        let iconTemplateString = `<i class="tiny material-icons">{{icon}}</i>`;
        return iconTemplateString.replace("{{icon}}", (isSortedAsc) ? "arrow_upward" : "arrow_downward");
    }

    template(model) {
        // return a new template based on a list
        // we must use the .join statement, otherwise we would have comma's between the table rows
        return `
        <table class="highlight">
            <thead>
                <tr>
                    <th class="pointer" onclick="calculationComponent.sort('hourlyWage');">
                        <i class="tiny material-icons pointer" onclick="calculationComponent.hideMessage();">
                            filter_list
                        </i>
                        Hourly Wage
                        ${(model.currentSortingColumn == 'hourlyWage') ? this.sortingIcon(model.isSortedAsc) : ""}
                    </th>
                    <th class="pointer" onclick="calculationComponent.sort('workedHours');">
                        <i class="tiny material-icons pointer" onclick="calculationComponent.hideMessage();">
                            filter_list
                        </i>
                        Worked Hours
                        ${(model.currentSortingColumn == 'workedHours') ? this.sortingIcon(model.isSortedAsc) : ""}
                    </th>
                    <th class="pointer" onclick="calculationComponent.sort('calculate');">
                        <i class="tiny material-icons pointer" onclick="calculationComponent.hideMessage();">
                            filter_list
                        </i>
                        Total
                        ${(model.currentSortingColumn == 'calculate') ? this.sortingIcon(model.isSortedAsc) : ""}
                    </th>
                </tr>
            </thead>
            <tbody>
                ${model.calculations.map(c => `
                    <tr>
                        <td>${c.hourlyWage}</td>
                        <td>${c.workedHours}</td>
                        <td>${c.calculate()}</td>
                    </tr>
                `).join('')}                
            </tbody>
            <tfoot>
                <td colspan="2">Total</td>
                <td>
                    ${model.calculations.reduce((total, n) => total + n.calculate(), 0.0)}
                </td>
            </tfoot>
        </table>
        `;
    }
}