import { Box, Link, Tooltip, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Browser from "components/Browser";
import React from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import DrexelCastleHome from "../../assets/castle-home.png";
import DrexelCastleMission from "../../assets/castle-mission.png";
import DrexelCastleOverview from "../../assets/castle-overview.png";
import ComcastHome from "../../assets/comcast-home.png";
import ComcastInternet from "../../assets/comcast-internet.png";
import ComcastOffers from "../../assets/comcast-offers.png";
import ComcastViewOffer from "../../assets/comcast-view-offer.png";
import SmartSecurityAlarms from "../../assets/ss-alarms.png";
import SmartSecurityEntrants from "../../assets/ss-entrants.png";
import SmartSecurityHome from "../../assets/ss-home.png";
import WalmartLabs from "../../assets/walmart-labs.png";
import DrexelWICSCharter from "../../assets/wics-charter.png";
import DrexelWICSHome from "../../assets/wics-home.png";

const useStyles = makeStyles((theme: Theme) => ({
	title: {
		color: theme.palette.primary.dark,
	},
	gallery: {
		width: 425,
		"& .image-gallery-slide": {
			maxHeight: 300,
			overflowY: "auto",
		},
		"& .image-gallery-image": {
			maxHeight: "none !important",
			objectFit: "unset",
		},
		// @todo: adjust arrow styling
		"& .image-gallery-icon": {
			filter: `drop-shadow(0 2px 2px ${theme.palette.primary.dark})`,
		},
		"& .image-gallery-icon:hover": {
			color: theme.palette.primary.main,
		},
		"& .image-gallery-left-nav": {
			left: -100,
		},
		"& .image-gallery-right-nav": {
			right: -100,
		},
		"& .image-gallery-svg": {
			height: 50,
		},
	},
	details: {
		backgroundColor: "rgba(225, 225, 224, 0.25)",
		marginTop: 24,
		padding: "16px 20px",
		"& p": {
			textAlign: "justify",
		},
	},
	icon: {
		color: theme.palette.primary.main,
		marginRight: 12,
		position: "relative",
		top: -2,
	},
	link: {
		color: theme.palette.primary.dark,
	},
	desc: {
		marginTop: 8,
		"& p": {
			margin: "8px 0",
		},
		"& ul": {
			listStyle: "none",
			margin: 0,
			paddingLeft: 24,
		},
		"& li:before": {
			display: "inline-block",
			color: theme.palette.primary.main,
			content: '"\u2022"',
			fontFamily: '"Playfair Display", serif',
			fontWeight: 600,
			marginLeft: -12,
			position: "relative",
			top: -2,
			width: 16,
		},
	},
}));

export const ProjectDetail: React.FC<{}> = (props) => {
	const classes = useStyles();

	const params = useParams<{ project: string }>();
	const project = params.project;
	const projectDisplayName = project.replace("_", " ");

	const [display, setDisplay] = React.useState<boolean>(true);

	// @todo: clean up project descriptions
	const projects = [
		{ name: "linode", tech: "", link: "", desc: "" },
		{
			name: "comcast",
			tech: "HTML5, CSS, JavaScript, JQuery, Amazon AWS, Adobe InDesign, Sketch",
			link: "",
			desc: (
				<Typography>
					As part of the Digital First web prototyping team, I
					collaborated with designers to develop the Comcast Business
					SMB re-architecture launch that won the MarCom Platinum
					Award in 2018.
				</Typography>
			),
		},
		{
			name: "smart security",
			tech: "HTML5, CSS, Bootstrap, Pure.CSS, JavaScript, JQuery, Firebase",
			link: "",
			desc: (
				<>
					<Typography>
						As part of Drexel University’s curriculum, every senior
						has to work in a team to develop a yearlong capstone
						project that involves extensive documentation, project
						management and a testing plan.
					</Typography>
					<Typography>
						The goal of Smart Security is to resolve the lack of
						security alarm systems for people who are renting an
						apartment. We have created a security alarm system that
						affordable, multifunctional and transportable by
						utilizing a Google Home to detect possible intrusions
						with real-time updates that are accessible through web
						and mobile devices.
					</Typography>
					<div style={{ marginBottom: 4 }}>
						<Typography>Documentation:</Typography>
						<ul>
							<li>
								<Link
									className={classes.link}
									href="/SmartSecurity/atp.pdf"
									target="_blank"
								>
									Acceptance Test Plan
								</Link>
							</li>
							<li>
								<Link
									className={classes.link}
									href="/SmartSecurity/poster.pdf"
									target="_blank"
								>
									Poster
								</Link>
							</li>
							<li>
								<Link
									className={classes.link}
									href="/SmartSecurity/sds.pdf"
									target="_blank"
								>
									Software Design Specification
								</Link>
							</li>
							<li>
								<Link
									className={classes.link}
									href="/SmartSecurity/srs.pdf"
									target="_blank"
								>
									Software Requirements Specification
								</Link>
							</li>
							<li>
								<Link
									className={classes.link}
									href="/SmartSecurity/manual.pdf"
									target="_blank"
								>
									User Manual
								</Link>
							</li>
						</ul>
					</div>
				</>
			),
		},
		{
			name: "drexel wics",
			tech: "HTML5, CSS, LESS, Bootstrap",
			link: "http://drexelwics.hosting.acm.org/",
			desc: (
				<Typography>
					The Women in Computing Society (WiCS) is an official student
					chapter of ACM-W and during my last year as a member, I
					served as the Chair of Web Development. Part of my
					responsibility included re-designing the website. The color
					scheme, logo and mandatory fields were established
					collectively and using those guidelines, I created a new
					website that will helpfully improve communcation and better
					serve the mission of empowering women in computer fields to
					succeed and thrive in the Drexel community and beyond.
				</Typography>
			),
		},
		{
			name: "drexel castle",
			tech: "HTML5, CSS, JavaScript, JQuery, Sitecore, Squarespace",
			link: "http://drexel.edu/castle/",
			desc: (
				<>
					<Typography>
						The Center for the Advancement of STEM Teaching and
						Learning Experience (CASTLE) at Drexel University was
						founded in 2014. It is responsible for many initiatives
						that aims to campaign experiential learning and
						innovation in STEM education.
					</Typography>
					<Typography>
						Since the organization is relatively new and constantly
						growing, a new website was needed to capture the breath
						of its initiatives. In order to do so, I collaborated
						with the design and social media team to implement a
						website that would match the new branding and style
						guide.
					</Typography>
				</>
			),
		},
		{
			name: "walmart labs",
			tech: "HTML5, CSS, Bootstrap, JavaScript, JQuery",
			link: "https://tiffwong.github.io/walmart/",
			desc: (
				<Typography>
					A programming challenge for Walmart Labs involved simulating
					a reservation request system for a movie theater. Requests
					are processed by uploading a file that matches the input
					format given and producing an output file that contains a
					reservation identifier and comma-delimited list of the
					assigned seats.
				</Typography>
			),
		},
	];

	const images = [
		{
			name: "linode",
			images: [],
		},
		{
			name: "comcast",
			images: [
				{ original: ComcastHome },
				{ original: ComcastInternet },
				{ original: ComcastOffers },
				{ original: ComcastViewOffer },
			],
		},
		{
			name: "smart security",
			images: [
				{ original: SmartSecurityHome },
				{ original: SmartSecurityAlarms },
				{ original: SmartSecurityEntrants },
			],
		},
		{
			name: "drexel wics",
			images: [
				{ original: DrexelWICSHome },
				{ original: DrexelWICSCharter },
			],
		},
		{
			name: "drexel castle",
			images: [
				{ original: DrexelCastleHome },
				{ original: DrexelCastleMission },
				{ original: DrexelCastleOverview },
			],
		},
		{
			name: "walmart labs",
			images: [{ original: WalmartLabs }],
		},
	];

	const showLink =
		projects.find(
			(project) =>
				project.name === projectDisplayName && project.link === ""
		) === undefined;

	return (
		<>
			<Typography variant="h2">
				{projectDisplayName}
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
			<Box display="flex" justifyContent="center">
				<Browser
					title={project}
					display={setDisplay}
					isDisplayed={display}
				>
					<div className={classes.gallery}>
						<ImageGallery
							items={
								images.find(
									(image) => image.name === projectDisplayName
								)?.images ?? []
							}
							infinite={false}
							showFullscreenButton={false}
							showPlayButton={false}
						/>
					</div>
				</Browser>
			</Box>
			<div className={classes.details}>
				<Typography>
					<i
						className={`${classes.icon} fas fa-fw fa-xs fa-code`}
					></i>
					{
						projects.find(
							(project) => project.name === projectDisplayName
						)?.tech
					}
				</Typography>
				{showLink ? (
					<Typography>
						<i
							className={`${classes.icon} fas fa-fw fa-xs fa-link`}
						></i>
						<Link className={classes.link} href="">
							{
								projects.find(
									(project) =>
										project.name === projectDisplayName
								)?.link
							}
						</Link>
					</Typography>
				) : null}
				<div className={classes.desc}>
					{
						projects.find(
							(project) => project.name === projectDisplayName
						)?.desc
					}
				</div>
			</div>
		</>
	);
};

export default ProjectDetail;
