class CalculationView extends View {
    constructor(element) {
        super(element);
    }

    template(model) {
        // return a new template based on a list
        // we must use the .join statement, otherwise we would have comma's between the table rows
        return `
        <table class="highlight">
            <thead>
                <tr>
                    <th>Hourly Wage</th>
                    <th>Hours worked</th>
                    <th>Total</th>
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