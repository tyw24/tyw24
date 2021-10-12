import { Tooltip, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Browser from "components/Browser";
import React from "react";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		cursor: "pointer",
		fontSize: "0.75rem",
		padding: 10,
		width: "fit-content",
		"& i": {
			color: theme.palette.primary.main,
			opacity: 0.75,
		},
		"&:hover $title": {
			backgroundColor: "rgba(225, 225, 224, 0.75)",
			borderRadius: 8,
			padding: "0 8px",
		},
	},
	title: {
		color: theme.palette.primary.dark,
	},
}));

export interface Props {}

export const ProjectDetail: React.FC<Props> = (props) => {
	const classes = useStyles();
	const params = useParams<{ project: string }>();
	const project = params.project;

	const [display, setDisplay] = React.useState<boolean>(true);

	return (
		<>
			<Typography variant="h2">
				{project.replace("_", " ")}
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
			<Browser title={project} display={setDisplay} isDisplayed={display}>
				<div>{project.replace("_", " ")}</div>
			</Browser>
		</>
	);
};

export default ProjectDetail;
