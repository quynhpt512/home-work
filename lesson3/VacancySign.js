import React, { Component } from 'react';
class VacancySign extends Component {
	constructor(props){
		super(props);
		this.textVacancySign = true;
	}
    render() {
		var textVacancySign;
		if (this.textVacancySign == true) {
			textVacancySign = 'Vacancy';
		} else {
			textVacancySign = 'No Vacancy';
		}
        return (
            <div className="VacancySign">
				{textVacancySign}
            </div>
        );
    }
}
export default VacancySign;
