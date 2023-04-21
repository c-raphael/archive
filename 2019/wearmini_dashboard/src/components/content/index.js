import React from "react";
import { Connect } from './connect'
import { Start } from './start'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
}));


export function MainContent() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Connect />
			<Start />
		</div>
	);
}