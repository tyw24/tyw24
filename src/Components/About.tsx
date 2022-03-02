import {
	Box,
	Link,
	Typography,
	useMediaQuery,
	useTheme,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface Detail {
	title: string;
	company: string;
	time: string;
	desc: JSX.Element;
}

const useStyles = makeStyles((theme: Theme) => ({
	centerOnMobile: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
			textAlign: "center",
		},
	},
	copy: {
		fontSize: "1.25rem",
		marginTop: 12,
		marginBottom: 12,
	},
	slash: {
		color: theme.palette.primary.main,
		fontSize: "1rem",
		margin: "24px 0px",
	},
	details: {
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			marginTop: -4,
			marginBottom: 8,
		},
	},
	detailsLeft: {
		minWidth: 200,
	},
	time: {
		color: "#888",
		fontFamily: '"Roboto Mono", sans-serif',
		fontSize: "0.75rem",
		marginTop: 2,
		[theme.breakpoints.down("sm")]: {
			marginTop: -2,
		},
	},
	detailsRight: {
		marginLeft: 20,
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0,
		},
	},
	position: {
		fontSize: "1rem",
	},
	desc: {
		"& ul": {
			color: "#666",
			marginTop: 4,
			paddingLeft: 16,
		},
		"& li": {
			listStyleType: "none",
			position: "relative",
			"&:before": {
				content: "'•'",
				color: theme.palette.primary.dark,
				position: "absolute",
				left: -16,
			},
		},
	},
}));

function About() {
	const classes = useStyles();
	const theme = useTheme();
	const matchesSmDown = useMediaQuery(theme.breakpoints.down("sm"));

	const jobs = [
		{
			title: "Software Engineer",
			company: "Linode",
			time: "March 2020 – Present",
			desc: (
				<ul>
					<li>
						Redesign the entire user interface to display more
						detailed information, improve navigation, and expand
						network usage metrics
					</li>
					<li>
						Conduct usability tests, review areas of improvement and
						design workflows before development with the UX team
					</li>
				</ul>
			),
		},
		{
			title: "Front-End Developer",
			company: "Comcast",
			time: "June 2018 – March 2020",
			desc: (
				<ul>
					<li>
						Developed high fidelity and responsive prototypes as
						proof of concepts to showcase new features and conduct
						A/B testing
					</li>
					<li>
						Collaborated with designers to launch the new Comcast
						Business SMB website that won the MarCom Platinum Award
						in 2018
					</li>
				</ul>
			),
		},
	];

	const school = [
		{
			title: "Drexel University",
			company: "B.S. in Computer Science",
			time: "September 2013 – June 2018",
			desc: (
				<ul>
					<li>
						Concentrated in Human-Computer Interaction and Software
						Engineering
					</li>
					<li>Was the commencement speaker at graduation</li>
				</ul>
			),
		},
	];

	const renderDetails = (heading: string, details: Detail[]) => {
		return (
			<>
				<Typography variant="h3">{heading}</Typography>
				{details.map((detail) => {
					return (
						<Box display="flex" className={classes.details}>
							{!matchesSmDown ? (
								<div className={classes.detailsLeft}>
									<Typography className={classes.time}>
										{detail.time}
									</Typography>
								</div>
							) : null}
							<div className={classes.detailsRight}>
								<Typography className={classes.position}>
									<strong>{detail.title}</strong>,{" "}
									{detail.company}
								</Typography>
								{matchesSmDown ? (
									<Typography className={classes.time}>
										{detail.time}
									</Typography>
								) : null}
								<Typography className={classes.desc}>
									{detail.desc}
								</Typography>
							</div>
						</Box>
					);
				})}
			</>
		);
	};

	return (
		<Box display="flex" flexDirection="column">
			<span className={classes.centerOnMobile}>
				<Typography variant="h1">Tiffany Wong</Typography>
				<Typography className={classes.copy}>
					Hi, I'm a UX Engineer at{" "}
					<Link
						href="https://linode.com"
						target="_blank"
						underline="always"
					>
						Linode
					</Link>{" "}
					based in Philadelphia, PA. I enjoy creating clean UI and
					playing with CSS.
				</Typography>
				<Typography>
					It all started with customizing my MySpace profile.
				</Typography>
				<Typography className={classes.slash}>
					&frasl;&frasl;
				</Typography>
			</span>
			{renderDetails("Experience", jobs)}
			{renderDetails("Education", school)}
		</Box>
	);
}

export default About;
