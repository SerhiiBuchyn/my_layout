import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import LanguageIcon from "@mui/icons-material/Language";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import "./DropDownMenu.css";

const actions = [
	{ icon: <LanguageIcon />, name: "UA" },
	{ icon: <LanguageIcon />, name: "EN" }
];

const DropDownMenu = () => {
	return (
		<div className="language-switcher__wrapper">
			<SpeedDial
				direction="down"
				ariaLabel="SpeedDial basic example"
				sx={{ height: 48 }}
				icon={<LanguageIcon />}>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
					/>
				))}
			</SpeedDial>
		</div>
	);
};

export default DropDownMenu;
