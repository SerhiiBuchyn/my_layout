import React from "react";

import { WhyUseCard } from "../../index";
import cardImg0 from "../../../../../images/messeng_icon.svg";
import cardImg1 from "../../../../../images/horse_icon.svg";
import cardImg2 from "../../../../../images/arrow_icon.svg";
import cardImg3 from "../../../../../images/human_icon.svg";

import "./WhyUsCards.css";

const cardList = [
	{
		id: 0,
		img: cardImg0,
		title: "COMPETENZA",
		description:
			"Le nostre soluzioni sono il risultato della nostra conoscenza del settore. Il nostro team ha anni di esperienza ma non rinuncia mai ad apprendere nuove abilità. "
	},
	{
		id: 1,
		img: cardImg1,
		title: "STRATEGIE PERSONALIZZATE",
		description:
			"Ogni azienda è unica e ha una storia da raccontare. \n" +
			"Personalizziamo la tua strategia online in modo da valorizzare i punti di forza della tua attività, comunicando il tuo messaggio in modo chiaro e trasparente."
	},
	{
		id: 2,
		img: cardImg2,
		title: "FLESSIBILITÀ",
		description:
			"Lavoriamo a progetti nuovi e diversi mettendo a disposizione le nostre conoscenze e studiando con attenzione il mercato di riferimento. Essere in grado di soddisfare il cliente con la massima professionalità è la nostra priorità."
	},
	{
		id: 3,
		img: cardImg3,
		title: "PROFESSIONALITÀ",
		description:
			"Siamo curiosi e ci documentiamo per apprendere sempre di più: il nostro lavoro è in continua evoluzione e noi vogliamo dare ai nostri clienti soluzioni esclusive e innovative."
	}
];

const WhyUsCards = () => {
	return (
		<div className="why-us__cards">
			{cardList.map((card) => (
				<WhyUseCard key={card.id} card={card} />
			))}
		</div>
	);
};

export default WhyUsCards;
