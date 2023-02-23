import React from "react";

import img1 from "../../../../../images/Group 118978.png";
import img2 from "../../../../../images/Mask Group.png";
import img3 from "../../../../../images/Mask Group (1).png";
import { WorkExamplesItem } from "../../../Componets";

const mocked_data = [
	{
		id: 0,
		name: "Dashboard",
		title: "QHSE Manager",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit ame",
		img: img1
	},
	{
		id: 1,
		name: "WEB DEVELOPMENT",
		title: "Givafer",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit ame",
		img: img2
	},
	{
		id: 2,
		name: "WEB & MOBILE APPLICATION",
		title: "Ordini App",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit ame",
		img: img3
	}
];

const WorkExamplesItems = () => {
	return (
		<div className="work-examples__items__wrapper">
			{mocked_data.map((workExamplesItem) => (
				<WorkExamplesItem key={workExamplesItem.id} workExamplesItem={workExamplesItem} />
			))}
		</div>
	);
};

export default WorkExamplesItems;
