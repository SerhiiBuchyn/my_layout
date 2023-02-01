import React from "react";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router";

const CustomLink = ({ to, children, ...props }) => {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props} className={`${isActive ? "active" : ""} "active__link"`}>
				{children}
			</Link>
		</li>
	);
};

export default CustomLink;
