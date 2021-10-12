import { Grid, Tooltip, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Browser from "../Browser";
import ProjectLink from "./ProjectLink";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		paddingTop: 8,
		paddingBottom: 8,
	},
}));

function Projects() {
	const classes = useStyles();

	const [display, setDisplay] = React.useState<boolean>(true);

	const projects = [
		"linode",
		"comcast",
		"smart_security",
		"drexel_wics",
		"drexel_castle",
		"walmart_labs",
	];

	return (
		<>
			<Typography variant="h2">
				Projects
				{!display ? (
					<Tooltip title="Undo" arrow placement="top">
						<span className="undo">
							<i
								className="fas fa-fw fa-undo"
								onClick={() => setDisplay(true)}
							></i>
						</span>
					</Tooltip>
				) : null}
			</Typography>
			<Browser
				title="Projects"
				display={setDisplay}
				isDisplayed={display}
				height={350}
			>
				<Grid className={classes.root} container>
					{projects.map((project) => (
						<ProjectLink title={project} />
					))}
				</Grid>
			</Browser>
		</>
	);
}

export default Projects;
