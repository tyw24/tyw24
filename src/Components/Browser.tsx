import { Box, Typography, Zoom } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: "relative",
	},
	browser: {
		backgroundColor: "white",
		border: `1px solid ${theme.palette.primary.light}`,
		borderRadius: 5,
		padding: "8px 16px 12px",
	},
	button: {
		borderRadius: 50,
		height: 10,
		width: 10,
		marginTop: 2,
		marginRight: 6,
	},
	red: {
		backgroundColor: "#ff605c",
		cursor: "pointer",
	},
	yellow: {
		backgroundColor: theme.palette.primary.main,
	},
	green: {
		backgroundColor: "#00ca4e",
	},
	search: {
		border: `1px solid ${theme.palette.primary.light}`,
		borderRadius: 50,
		fontSize: "0.5rem",
		letterSpacing: 2,
		marginLeft: 6,
		padding: "2px 10px",
		textTransform: "uppercase",
		width: "calc(100% - 50px)",
	},
	title: {
		fontFamily: '"Roboto", sans-serif',
	},
	inner: {
		border: `1px solid ${theme.palette.primary.light}`,
		marginTop: 8,
		minHeight: 150,
	},
	error: {
		textAlign: "center",
		top: "calc(50% - 100px)",
		position: "absolute",
		width: "100%",
		zIndex: -1,
	},
	errorMessage: {
		fontSize: "0.75rem",
		top: "48%",
	},
}));

export interface Props {
	title: string;
	display: (boolean: boolean) => void;
	isDisplayed: boolean;
	height?: number;
	children?: JSX.Element;
}

export const Browser: React.FC<Props> = (props) => {
	const classes = useStyles();

	const { title, display, isDisplayed, height, children } = props;

	return (
		<div className={classes.root}>
			<Zoom in={isDisplayed}>
				<div className={classes.browser}>
					<Box display="flex">
						<div
							className={`${classes.button} ${classes.red}`}
							onClick={() => display(false)}
						></div>
						<div
							className={`${classes.button} ${classes.yellow}`}
						></div>
						<div
							className={`${classes.button} ${classes.green}`}
						></div>
						<div className={classes.search}>
							<span style={{ position: "relative", top: -1 }}>
								:
							</span>
							&#8725;&#8725;
							<span className={classes.title}>{title}</span>
						</div>
					</Box>
					<div className={classes.inner} style={{ height: height }}>
						{children}
					</div>
				</div>
			</Zoom>
			{!isDisplayed ? (
				<>
					<Typography className={classes.error} variant="h1">
						:)
					</Typography>
					<Typography
						className={`${classes.error} ${classes.errorMessage}`}
					>
						Click the undo icon next to the title to
						<br />
						show the content again.
					</Typography>
				</>
			) : null}
		</div>
	);
};

export default Browser;
