import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import ProjectDetail from "./Projects/ProjectDetail";
import Projects from "./Projects/Projects";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100%",
		position: "fixed",
		top: 100,
		left: 440,
		width: "calc(100vw - 500px)",
		[theme.breakpoints.down("sm")]: {
			margin: "60px auto 0",
			position: "relative",
			top: 0,
			left: 0,
			width: "unset",
		},
	},
	mask: {
		maskImage: "linear-gradient(black 80%, transparent 100%)",
	},
	wrapper: {
		height: "calc(100vh - 165px)",
		overflowY: "scroll",
		paddingBottom: 120,
		"&::-webkit-scrollbar": {
			display: "none",
		},
		"& > div": {
			maxWidth: 640,
		},
		[theme.breakpoints.down("sm")]: {
			height: "unset",
			overflowY: "auto",
		},
	},
}));

function Content() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.mask}>
				<div className={classes.wrapper}>
					<Router>
						<Switch>
							<Route
								component={ProjectDetail}
								path="/projects/:project"
							/>
							<Route component={Projects} path="/projects" />
							<Route component={About} path="/" />
						</Switch>
					</Router>
				</div>
			</div>
		</div>
	);
}

export default Content;
