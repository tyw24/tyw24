import { Box, Link } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Avatar from "./Avatar";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		borderRight: `1px solid ${theme.palette.primary.light}`,
		height: "calc(100vh - 160px)",
		maxWidth: 400,
		paddingLeft: 60,
		paddingRight: 40,
		[theme.breakpoints.down("sm")]: {
			borderRight: "none",
			height: "auto",
			margin: "auto",
		},
	},
	nav: {
		"& ul": {
			listStyleType: "none",
			margin: 0,
			paddingLeft: 0,
		},
		"& li": {
			[theme.breakpoints.down("sm")]: {
				display: "inline-block",
				marginRight: 30,
			},
		},
		"& li:last-of-type": {
			[theme.breakpoints.down("sm")]: {
				marginRight: 0,
			},
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: -20,
		},
	},
	link: {
		color: theme.palette.primary.dark,
		cursor: "pointer",
		fontFamily: '"Roboto", sans-serif',
		fontSize: "0.875rem",
		fontWeight: 600,
		letterSpacing: 2,
		lineHeight: 2,
		outline: "none",
		position: "relative",
		textDecoration: "none",
		textTransform: "uppercase",
		"&:before": {
			backgroundColor: theme.palette.primary.main,
			content: '""',
			height: 5,
			width: "calc(100% + 18px)",
			opacity: 0,
			position: "absolute",
			top: 5,
			left: -10,
			zIndex: -1,
		},
		"&:focus, &:hover": {
			textDecoration: "none",
			"&:before": {
				opacity: 0.5,
			},
		},
	},
}));

function Nav() {
	const classes = useStyles();
	const path = "tiffwong.github.io";

	return (
		<Box
			className={classes.root}
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<Avatar />
			<nav className={classes.nav} aria-label="">
				<ul id="menu" role="menubar" aria-label="">
					<li>
						<Link className={classes.link} href="/" tabIndex={0}>
							About
						</Link>
					</li>
					<li>
						<Link className={classes.link} href="/projects">
							Projects
						</Link>
					</li>
					<li>
						<Link className={classes.link} href="/resume">
							Resume
						</Link>
					</li>
				</ul>
			</nav>
		</Box>
	);
}

export default Nav;
