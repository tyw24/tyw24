import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Content from './component/Content';
import Nav from './component/Nav';
import theme from './theme';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		marginTop: 80,
		maxWidth: 1280,
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			margin: '20px 40px',
		},
	},
});

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={ theme }>
			<CssBaseline />
			<div className={ classes.root }>
				<Nav />
				<Content />
			</div>
		</ThemeProvider>
	);
}

export default App;
