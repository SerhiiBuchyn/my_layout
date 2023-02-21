import React, { useEffect, useState } from "react";

import { OurServicesListItem } from "../../index";

const OurServicesList = () => {
	const list = [
		{
			id: 0,
			title: "Development",
			service: {
				service_list0: "Website",
				service_list1: "Mobile apps",
				service_list2: "CMS",
				service_list3: "Web apps",
				service_list4: "eCommerce",
				service_list5: "Aps"
			}
		},
		{
			id: 1,
			title: "Design",
			service: {
				service_list0: "UX/UI",
				service_list1: "Mobile apps",
				service_list2: "Packaging",
				service_list3: "Brand identify",
				service_list4: "Print",
				service_list5: "Motion design"
			}
		},
		{
			id: 2,
			title: "Marketing",
			service: {
				service_list0: "Strategy",
				service_list1: "Naming",
				service_list2: "Photo & Video",
				service_list3: "Copy writing",
				service_list4: "Trademarks"
			}
		}
	];

	const [servicesList, setServicesList] = useState([]);
	useEffect(() => setServicesList(list), [list.id]);

	return (
		<div className="our-services__list">
			{servicesList.map((serviceItem) => (
				<OurServicesListItem key={serviceItem.id} serviceItem={serviceItem} />
			))}
		</div>
	);
};

export default OurServicesList;
