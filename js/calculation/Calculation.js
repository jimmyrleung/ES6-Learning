class Calculation {
    constructor(hourlyWage, workedHours){
        this._hourlyWage = hourlyWage || 0.00;
        this._workedHours = workedHours || 0.00;
    }

    get hourlyWage(){
        return this._hourlyWage;
    }

    get workedHours(){
        return this._workedHours;
    }

    set hourlyWage(hourlyWage){
        this._hourlyWage = hourlyWage;
    }

    set workedHours(workedHours){
        this._workedHours = workedHours;
    }

    calculate(){
        return (!this._hourlyWage || !this._workedHours) ? 0 : this._workedHours * this._hourlyWage;
    }
}