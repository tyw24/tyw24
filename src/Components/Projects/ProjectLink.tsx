import { Grid } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";

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

export interface Props {
	title: string;
}

export const ProjectLink: React.FC<Props> = (props) => {
	const classes = useStyles();
	const history = useHistory();

	const { title } = props;

	return (
		<Grid container justifyContent="center" xs={3}>
			<Grid
				className={classes.root}
				container
				direction="column"
				alignItems="center"
				onClick={() => history.push(`/projects/${title}`)}
			>
				<i className="far fa-5x fa-folder"></i>
				<span className={classes.title}>{title}</span>
			</Grid>
		</Grid>
	);
};

export default ProjectLink;
