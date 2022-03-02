import { Link, Tooltip, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles((theme: Theme) => ({
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
	resume: {
		"& .react-pdf__Page__textContent": {
			border: `1px solid ${theme.palette.primary.light}`,
		},
	},
}));

function Resume() {
	const classes = useStyles();

	return (
		<>
			<Typography variant="h2">
				Resume
				<Tooltip title="Download" arrow placement="top">
					<Link
						className={classes.download}
						download="TiffanyWong_Resume.pdf"
						href="/resume.pdf"
					>
						<i className="fa fa-fw fa-download"></i>
					</Link>
				</Tooltip>
			</Typography>
			<div className={classes.resume}>
				<Document file="/resume.pdf">
					<Page pageNumber={1} />
				</Document>
			</div>
		</>
	);
}

export default Resume;
