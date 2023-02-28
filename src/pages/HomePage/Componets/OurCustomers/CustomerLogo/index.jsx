import React from "react";

import "./CustomerLogo.css";

const CustomerLogo = ({ logo: { img } }) => {
	return (
		<div className="customer-logo__container">
			<div className="customer-logo">
				<img className="customer-logo__img" src={img} alt="#" />
			</div>
		</div>
	);
};

export default CustomerLogo;
