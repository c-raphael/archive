import React from 'react';
import { Component } from 'react';
import propTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class User extends Component {
    render() {

    	const { name, username, email, phone, website } = this.props.contact;
        return (

		<TableBody>
			<TableRow>
				<TableCell>{name}</TableCell>
				<TableCell>{username}</TableCell>	
				<TableCell>{email}</TableCell>		
				<TableCell>{phone}</TableCell>		
				<TableCell>{website}</TableCell>																				
			</TableRow>
		</TableBody>        	

    )};

}

// PropTypes
User.propTypes = {
	contact: propTypes.object.isRequired
}


export default User