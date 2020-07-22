import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;

	render() {
		const text = this.context.language === "portuguese" ? "Selecione o idioma: " : "Select a language: ";
		return (
			<div>
				{text}
				<i
					className="flag br"
					onClick={() => this.context.onLanguageChange("portuguese")}
				/>
				<i
					className="flag us"
					onClick={() => this.context.onLanguageChange("english")}
				/>
			</div>
		);
	}
}

export default LanguageSelector;
