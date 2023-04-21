import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStylesConnect = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  cardStart: {
    width: '100%',
    margin: '25px',
    borderRadius: '0px',
    boxShadow: 'none',
    border: '1px solid #dee2e6',
    backgroundColor: '#f8f9fa'
  },
  cardConnect: {
    margin: '25px',
    borderRadius: '0px',
    boxShadow: 'none',
    border: '1px solid #dee2e6',
    backgroundColor: '#f8f9fa'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },  
  btnSettings: {
    backgroundColor: '#343a40',
    color: 'white',
    margin: '5px',
  }, 
  connect: {
    color: '#118076',
    fontWeight: '600'
  },
  errorIconStyle: {
    position: 'absolute',
    fontSize: '100px',
    right: '50px',
    top: '70px',
    color: '#118076'
  }
}));


export const useStylesStart = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    margin: '25px',
  },
  paper: {
    height: 'auto',
    width: 200,
    textAlign: 'center',
    boxShadow: 'none'
  },
  control: {
    padding: theme.spacing(2),
  },
    btnSettings: {
    backgroundColor: '#343a40',
    color: 'white',
    margin: '5px',
  }, 
    iconFonts: {
    fontSize: '8rem',
    color: '#343a40'
  }
}));