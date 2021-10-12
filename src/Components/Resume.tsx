import { Link, Tooltip, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	download: {
		display: "inline-block",
		marginLeft: 4,
		position: "relative",
		top: -2,
		"& i": {
			color: theme.palette.primary.light,
			fontSize: "1.25rem",
			"&:hover": {
				color: theme.palette.primary.main,
			},
		},
	},
}));

function Resume() {
	const classes = useStyles();

	return (
		<>
			<Typography variant="h2">
				Resume{" "}
				<Tooltip title="Download" arrow placement="top">
					<Link
						className={classes.download}
						download="Tiffany Wong - Resume.pdf"
						href="../assets/resume.pdf"
					>
						<i className="fa fa-fw fa-download"></i>
					</Link>
				</Tooltip>
			</Typography>
		</>
	);
}

export default Resume;
