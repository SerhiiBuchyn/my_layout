import React from "react";

import "./WorkExamplesItem.css";

const WorkExamplesItem = ({ workExamplesItem: { name, title, description, img } }) => {
	return (
		<div className="work-example__item">
			<div className="work-example__item__info">
				<p className="work-example__item__info__name text-dark-grey">{name}</p>
				<h4 className="work-example__item__info__title text-dark-grey">{title}</h4>
				<p className="work-example__item__info__description text-light-grey">
					{description}
				</p>
			</div>
			<div className="work-example__item__img">
				<img className="work-example__item__photo" src={img} alt="#" />
			</div>
		</div>
	);
};

export default WorkExamplesItem;
