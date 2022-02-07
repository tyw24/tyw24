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
				{/* @todo: rewrite bio */}
				<Typography className={classes.copy}>
					I am a Front-End Web Developer located in Philadelphia with
					a passion for responsive web design, quality user
					experience, and converting complex challenges into simple
					solutions. I currently work at Comcast as part of the
					prototyping team where we create high fidelity prototypes
					used to show stakeholders, perform A/B testing, and easily
					reflect architectural changes. <br />
					As a recent graduate of Drexel University, I majored in
					Computer Science with concentrations in Human-Computer
					Interaction and Software Engineering. I also had the honor
					of being one of the speakers at my commencement.
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
