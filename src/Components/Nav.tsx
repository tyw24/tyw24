import { Box, Link, Tooltip, useMediaQuery } from "@material-ui/core";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import Avatar from "./Avatar";

interface Social {
	title: string;
	link: string;
	icon: string;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		borderRight: `1px solid ${theme.palette.primary.light}`,
		minHeight: "calc(100vh - 160px)",
		position: "fixed",
		top: 80,
		left: 20,
		width: 340,
		[theme.breakpoints.down("sm")]: {
			borderRight: "none",
			height: "auto",
			margin: "auto",
			minHeight: "unset",
			position: "relative",
			top: 0,
			left: 0,
		},
	},
	nav: {
		"& ul": {
			listStyleType: "none",
			margin: 0,
			paddingLeft: 0,
		},
		"& li": {
			[theme.breakpoints.down("sm")]: {
				display: "inline-block",
				marginRight: 30,
			},
		},
		"& li:last-of-type": {
			[theme.breakpoints.down("sm")]: {
				marginRight: 0,
			},
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: -20,
		},
	},
	link: {
		color: theme.palette.primary.dark,
		cursor: "pointer",
		fontSize: "1rem",
		fontWeight: 600,
		letterSpacing: 2,
		lineHeight: 2,
		outline: "none",
		position: "relative",
		textDecoration: "none",
		textTransform: "uppercase",
		"&:before": {
			backgroundColor: theme.palette.primary.main,
			content: '""',
			height: 6,
			width: "calc(100% + 6px)",
			opacity: 0,
			position: "absolute",
			top: 10,
			left: -4,
			zIndex: -1,
		},
		"&:focus, &:hover": {
			textDecoration: "none",
			"&:before": {
				opacity: 0.6,
			},
		},
	},
	social: {
		marginTop: 100,
		marginLeft: -10,
		"& i": {
			color: theme.palette.primary.light,
			marginLeft: 4,
			marginRight: 4,
			"&:hover": {
				color: theme.palette.primary.main,
			},
		},
		[theme.breakpoints.down("sm")]: {
			marginTop: 20,
		},
	},
}));

function Nav() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"));

	const socials = [
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/tffwng",
			icon: "fa-linkedin",
		},
		{
			title: "GitHub",
			link: "https://github.com/tiffwong",
			icon: "fa-github",
		},
		{
			title: "CodePen",
			link: "https://codepen.io/tiffwong/",
			icon: "fa-codepen",
		},
	];

	const renderSocial = (socials: Social[]) => {
		return socials.map((social) => {
			return (
				<Tooltip
					title={social.title}
					arrow
					placement={matchesSmDown ? "bottom" : "top"}
				>
					<Link href={social.link} target="_blank">
						<i className={`fab fa-fw fa-lg ${social.icon}`}></i>
					</Link>
				</Tooltip>
			);
		});
	};

	return (
		<Box
			className={classes.root}
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="stretch"
		>
			<Avatar />
			<nav className={classes.nav} aria-label="">
				<ul id="menu" role="menubar" aria-label="">
					<li>
						<Link className={classes.link} href="/" tabIndex={0}>
							About
						</Link>
					</li>
					<li>
						<Link className={classes.link} href="/projects">
							Projects
						</Link>
					</li>
					<li>
						<Link
							className={classes.link}
							download="TiffanyWong_Resume.pdf"
							href="/resume.pdf"
						>
							Resume
						</Link>
					</li>
				</ul>
			</nav>
			<Box className={classes.social}>{renderSocial(socials)}</Box>
		</Box>
	);
}

export default Nav;
