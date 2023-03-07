import React from "react";

import "./WhyUsCard.css";

const WhyUsCard = ({ card: { img, title, description } }) => {
	return (
		<div className="why-us__card">
			<div className="why-us__card__img__container">
				<div className="why_us__card__img">
					<img src={img} alt={title} />
				</div>
			</div>
			<div className="why-us__card__description__container">
				<h5 className="why-us__card__title text-dark-grey">{title}</h5>
				<p className="why-us__card__description text-light-grey">{description}</p>
			</div>
		</div>
	);
};

export default WhyUsCard;
