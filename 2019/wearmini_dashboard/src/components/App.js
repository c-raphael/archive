import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { DrawerContent } from './layout/index';
import { MainContent } from './content/index';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%'
  },
}));

export default function() {
 const classes = useStyles();
  return (
    <div className={classes.root}>
      <DrawerContent />
      <MainContent />
    </div>
  );
}