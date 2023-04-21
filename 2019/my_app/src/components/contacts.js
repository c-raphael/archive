import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Users from './user';



const useStyles = makeStyles(theme => ({
  size: {
    width: '100%',
  },
}));

const Contacts = ({contacts}) => {
    const classes = useStyles();	

	return(


		<div>
    		<TableHead className={classes.size}>
    		<TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>                
                <TableCell>E-mail</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
      		</TableRow>
      		</TableHead>

			{contacts.map((contact) => (
				<Users key={contact.id} contact={contact} />
			))}
		</div>
	)
}  

export default Contacts;