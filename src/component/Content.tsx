import { makeStyles, Theme } from '@material-ui/core/styles';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import About from './About';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '100%',
        marginLeft: 50,
		[theme.breakpoints.down('sm')]: {
			margin: '60px auto 0',
			position: 'relative',
			top: 0,
			left: 0,
			width: 'unset',
		},
	},
	mask: {
		maskImage: 'linear-gradient(black 80%, transparent 100%)',
	},
	wrapper: {
		height: 'calc(100vh - 165px)',
		overflowY: 'scroll',
        marginTop: 36,
		paddingBottom: 120,
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		'& > div': {
			maxWidth: 640,
		},
		[theme.breakpoints.down('sm')]: {
			height: 'unset',
			overflowY: 'auto',
		},
	},
}));

function Content() {
	const classes = useStyles();

	return (
		<div className={ classes.root }>
			<div className={ classes.mask }>
				<div className={ classes.wrapper }>
					<Router>
                        <Route component={ About } path='/' />
					</Router>
				</div>
			</div>
		</div>
	);
}

export default Content;
