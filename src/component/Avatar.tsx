import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: 248,
		width: 248,
		position: 'relative',
		transform: 'scale(80%)',
		'&:hover $speechBubble': {
			opacity: 1,
		},
	},
	background: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: '50%',
		height: 230,
		width: 230,
		position: 'relative',
		zIndex: -5,
	},
	backgroundHide: {
		display: 'block',
		border: '20px solid white',
		borderRadius: '50%',
		height: 268,
		width: 268,
		top: -19,
		left: -19,
		position: 'absolute',
		zIndex: 999,
	},
	head: {
		backgroundColor: theme.palette.secondary.main,
		borderRadius: 45,
		height: 95,
		width: 60,
		position: 'absolute',
		top: 35,
		left: 85,
		'&:before': {
			backgroundColor: theme.palette.secondary.main,
			borderRadius: 50,
			content: '""',
			height: 16,
			width: 16,
			position: 'absolute',
			top: 51,
			left: -9,
			zIndex: -2,
		},
		'&:after': {
			backgroundColor: theme.palette.secondary.dark,
			borderRadius: 4,
			content: '""',
			height: 8,
			width: 8,
			position: 'absolute',
			top: 55,
			left: -5,
			zIndex: -1,
		},
	},
	hairBack: {
		backgroundColor: 'black',
		borderRadius: 50,
		height: 150,
		width: 85,
		position: 'absolute',
		top: -10,
		left: -16,
		zIndex: -3,
		'&:after': {
			backgroundColor: theme.palette.primary.main,
			content: '""',
			height: 40,
			width: 88,
			position: 'absolute',
			top: 115,
			transform: 'rotate(-4deg)',
		},
	},
	hairFrontRight: {
		backgroundColor: 'black',
		borderRadius: '0 80px 0 120px',
		height: 50,
		width: 28,
		position: 'absolute',
		top: -2,
		right: -2,
		transform: 'rotate(-10deg)',
		zIndex: 3,
		'&:before': {
			backgroundColor: 'black',
			content: '""',
			height: 32,
			width: 32,
			position: 'absolute',
			top: -2,
			left: -23,
		},
		'&:after': {
			backgroundColor: theme.palette.secondary.main,
			borderTopRightRadius: 25,
			content: '""',
			height: 25,
			width: 28,
			position: 'absolute',
			top: 16,
			left: -24,
		},
	},
	hairFrontLeft: {
		backgroundColor: 'black',
		borderTopLeftRadius: '50%',
		borderBottomRightRadius: '70%',
		height: 40,
		width: 18,
		position: 'absolute',
		top: 8,
		left: -5,
		transform: 'rotate(12deg)',
		zIndex: 4,
	},
	eyebrow: {
		backgroundColor: 'black',
		borderRadius: 20,
		height: 5,
		width: 14,
		position: 'absolute',
		top: 40,
		left: 7,
		transform: 'rotate(-10deg)',
		zIndex: 3,
	},
	eyes: {
		backgroundColor: 'black',
		border: '2px solid white',
		borderRadius: '50%',
		height: 15,
		width: 15,
		position: 'absolute',
		top: 48,
		left: 8,
		'&:after': {
			backgroundColor: 'black',
			border: '2px solid white',
			borderRadius: '50%',
			content: '""',
			height: 15,
			width: 15,
			position: 'absolute',
			top: -2,
			left: 32,
		},
	},
	nose: {
		backgroundColor: theme.palette.secondary.dark,
		borderRadius: 50,
		height: 14,
		width: 6,
		position: 'absolute',
		top: 56,
		left: 30,
		zIndex: 3,
	},
	mouth: {
		backgroundColor: 'black',
		borderRadius: '0 0 50px 50px',
		height: 10,
		width: 20,
		position: 'absolute',
		top: 76,
		left: 22,
		transform: 'rotate(5deg)',
		zIndex: 3,
	},
	neck: {
		backgroundColor: theme.palette.secondary.dark,
		borderRadius: 10,
		height: 33,
		width: 20,
		position: 'absolute',
		top: 120,
		left: 104,
		transform: 'rotate(-3deg)',
		zIndex: -1,
	},
	body: {
		backgroundColor: theme.palette.primary.dark,
		borderRadius: '50px 50px 0 0',
		height: 100,
		width: 60,
		position: 'absolute',
		top: 136,
		left: 84,
		transform: 'rotate(-2deg)',
		transformOrigin: 'top center',
		zIndex: -2,
	},
	shoulder: {
		backgroundColor: theme.palette.primary.dark,
		borderRadius: 50,
		height: 20,
		width: 68,
		position: 'absolute',
		top: 6,
		left: -7,
		transform: 'rotate(-3deg)',
	},
	sleeveLeft: {
		backgroundColor: theme.palette.primary.dark,
		borderRadius: 50,
		height: 45,
		width: 20,
		position: 'absolute',
		top: 144,
		left: 72,
		transform: 'rotate(18deg)',
		zIndex: -3,
		'&:before': {
			backgroundColor: theme.palette.primary.main,
			content: '""',
			height: 10,
			width: 20,
			position: 'absolute',
			top: 38,
		},
	},
	armLeft: {
		backgroundColor: theme.palette.secondary.main,
		height: 45,
		width: 16,
		position: 'absolute',
		top: 38,
		left: 3,
	},
	sleeveRight: {
		backgroundColor: theme.palette.primary.dark,
		borderRadius: 50,
		height: 47,
		width: 20,
		position: 'absolute',
		top: 138,
		right: 94,
		transform: 'rotate(-30deg)',
		zIndex: -3,
		'&:before': {
			backgroundColor: theme.palette.primary.main,
			content: '""',
			height: 10,
			width: 20,
			position: 'absolute',
			top: 40,
			transform: 'rotate(-3deg)',
			zIndex: -3,
		},
	},
	armRight: {
		backgroundColor: theme.palette.secondary.main,
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
		height: 45,
		width: 16,
		position: 'absolute',
		top: 39,
		transform: 'rotate(4deg)',
	},
	'@keyframes wave': {
		'0%': {
			transform: 'rotate(55deg)',
		},
		'50%': {
			transform: 'rotate(40deg) translateX(2px) translateY(5px)',
		},
		'100%': {
			transform: 'rotate(55deg)',
		},
	},
	animate: {
		animation: '$wave 2s linear infinite',
		top: 139,
		right: 73,
		position: 'absolute',
		transformOrigin: 'center bottom',
		zIndex: 999,
	},
	armRightWave: {
		backgroundColor: theme.palette.secondary.main,
		borderRadius: 50,
		height: 70,
		width: 16,
		transform: 'rotate(4deg)',
		zIndex: -2,
	},
	hand: {
		backgroundColor: theme.palette.secondary.main,
		borderRadius: 50,
		borderTopRightRadius: 120,
		borderBottomLeftRadius: 120,
		height: 35,
		width: 20,
		position: 'absolute',
		top: -25,
		left: 2,
		transform: 'rotate(15deg)',
		zIndex: 999,
		'&:before': {
			backgroundColor: theme.palette.secondary.main,
			borderRadius: 50,
			content: '""',
			height: 22,
			width: 6,
			position: 'absolute',
			top: 12,
			left: 2,
			transform: 'rotate(-35deg)',
			transformOrigin: 'center bottom',
		},
	},
	speechBubble: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		backgroundColor: 'white',
		border: `1px solid ${theme.palette.primary.light}`,
		borderRadius: 50,
		color: theme.palette.primary.dark,
		fontFamily: '"Roboto Mono", sans-serif',
		fontSize: '0.75rem',
		letterSpacing: 2,
		height: 35,
		width: 80,
		opacity: 0,
		paddingTop: 2,
		paddingLeft: 6,
		position: 'absolute',
		top: 50,
		right: -8,
		zIndex: 999,
		'&:before': {
			borderTop: `15px solid ${theme.palette.primary.light}`,
			borderRight: '16px solid transparent',
			content: '""',
			height: 0,
			width: 0,
			position: 'absolute',
			top: 33,
			left: 14,
			transform: 'rotate(7deg)',
		},
		'&:after': {
			borderTop: '15px solid white',
			borderRight: '15px solid transparent',
			content: '""',
			height: 0,
			width: 0,
			position: 'absolute',
			top: 31,
			left: 15,
			transform: 'rotate(8deg)',
		},
	},
}));

function Avatar() {
	const classes = useStyles();

	return (
		<div className={ classes.root }>
			<div className={ classes.background }></div>
			<div className={ classes.backgroundHide }></div>
			<div className={ classes.head }>
				<div className={ classes.hairBack }></div>
				<div className={ classes.hairFrontRight }></div>
				<div className={ classes.hairFrontLeft }></div>
				<div className={ classes.eyebrow }></div>
				<div className={ classes.eyes }></div>
				<div className={ classes.nose }></div>
				<div className={ classes.mouth }></div>
			</div>
			<div className={ classes.neck }></div>
			<div className={ classes.body }>
				<div className={ classes.shoulder }></div>
			</div>
			<div className={ classes.sleeveLeft }>
				<div className={ classes.armLeft }></div>
			</div>
			<div className={ classes.sleeveRight }>
				<div className={ classes.armRight }></div>
			</div>
			<div className={ classes.animate }>
				<div className={ classes.armRightWave }></div>
				<div className={ classes.hand }></div>
			</div>
			<div className={ classes.speechBubble }>HELLO!</div>
		</div>
	);
}

export default Avatar;
