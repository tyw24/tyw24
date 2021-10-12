import { Box, Link, Tooltip, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100%",
	},
	title: {
		marginLeft: -8,
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
			textAlign: "center",
		},
	},
	details: {
		marginBottom: 8,
		"& i": {
			marginRight: 8,
		},
	},
	copy: {
		marginTop: 12,
		textAlign: "justify",
	},
	social: {
		marginTop: 50,
		marginRight: -4,
		"& i": {
			color: theme.palette.primary.light,
			marginLeft: 4,
			marginRight: 4,
			"&:hover": {
				color: theme.palette.primary.main,
			},
		},
	},
}));

function About() {
	const classes = useStyles();

	return (
		<Box
			className={classes.root}
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
		>
			<Box>
				<Typography className={classes.title} variant="h1">
					Tiffany Wong
				</Typography>
				<Typography className={classes.details}>
					<i className="fas fa-fw fa-map-marker-alt"></i>
					Philadelphia, PA
				</Typography>
				<Typography className={classes.details}>
					<i className="fas fa-fw fa-briefcase"></i>
					Software Engineer
				</Typography>
				<Typography className={classes.copy}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</Typography>
			</Box>
			<Box
				className={classes.social}
				display="flex"
				justifyContent="flex-end"
			>
				<Tooltip title="LinkedIn" arrow>
					<Link
						href="https://www.linkedin.com/in/tffwng"
						target="_blank"
					>
						<i className="fab fa-fw fa-lg fa-linkedin"></i>
					</Link>
				</Tooltip>
				<Tooltip title="GitHub" arrow>
					<Link href="https://github.com/tiffwong" target="_blank">
						<i className="fab fa-fw fa-lg fa-github"></i>
					</Link>
				</Tooltip>
				<Tooltip title="CodePen" arrow>
					<Link href="https://codepen.io/tiffwong/" target="_blank">
						<i className="fab fa-fw fa-lg fa-codepen"></i>
					</Link>
				</Tooltip>
			</Box>
		</Box>
	);
}

export default About;
