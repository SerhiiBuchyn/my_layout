import React from "react";
import { Link } from "react-router-dom";

import "./OurServicesListItem.css";

const OurServicesListItem = ({ serviceItem }) => {
	return (
		<div className="our-service__item">
			<h5 className="our-service__item__title">
				<Link to={"/portfolio"}>{serviceItem.title}</Link>
			</h5>
			<div className="our-service__item__wrapper">
				<div className="our-service__item__list">
					<Link to={"#"}>{serviceItem.service.service_list0}</Link>
					<Link to={"#"}>{serviceItem.service.service_list1}</Link>
					<Link to={"#"}>{serviceItem.service.service_list2}</Link>
				</div>
				<div className="our-service__item__list">
					<Link to={"#"}>{serviceItem.service.service_list3}</Link>
					<Link to={"#"}>{serviceItem.service.service_list4}</Link>
					<Link to={"#"}>{serviceItem.service.service_list5}</Link>
				</div>
			</div>
		</div>
	);
};
export default OurServicesListItem;
