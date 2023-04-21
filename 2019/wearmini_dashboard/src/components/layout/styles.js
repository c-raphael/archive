import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: '',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  tabs: {
    position: 'absolute',
    width: '100%',
    color: 'green',
  },
  alignment: {
    alignItems: 'normal',
    display: 'flex',
    justifyContent: 'normal',
    flexDirection: 'unset'
  },
  tabbg: {
    background: '#DDDDDD',
    borderBottom: '2px solid #dee2e6',
    width: '100%',
  },
  user: {
  position: 'absolute',
    bottom: '0px',
    width: '100%'
  },  
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  btnLogoutSyle: {
    margin: '0px',
    backgroundColor: '#343a40',
    color: 'white',   
    borderRadius: '0px',
    width: '100%',
    display: 'flex',
  },
  btnstyle: {
    margin: '0px',
    backgroundColor: 'white',
    color: 'black',   
    borderRadius: '0px',
    width: '100%',
    display: 'flex',
    boxShadow: 'none',
    borderBottom: '1px solid #dee2e6',
  },  
  dropdownitems: {
  position: 'unset !important',
    transform: 'none !important',
  },
  dropdownstyle: {
  color: 'red',
  },
  dropdownbtnstyle: {
    width: '100%',
    borderRadius: '0px',
  },
  iconFonts: {
    margin: '0px 10px'
  }
}));
