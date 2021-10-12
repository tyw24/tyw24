import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import ProjectDetail from "./Projects/ProjectDetail";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: "24px 100px 0 50px",
		maxWidth: 600,
		width: "100%",

		[theme.breakpoints.down("sm")]: {
			marginRight: 50,
			maxWidth: "fit-content",
		},
	},
}));

function Content() {
	const classes = useStyles();
	const path = "tiffwong.github.io";

	return (
		<div className={classes.root}>
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route
						component={ProjectDetail}
						path={`${path}/projects/:project`}
					/>
					<Route component={Projects} path="/projects" />
					<Route component={Resume} path="/resume" />
					<Route component={About} path="/" />
				</Switch>
			</Router>
		</div>
	);
}

export default Content;
