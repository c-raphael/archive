import React from 'react';
import { Component } from 'react';
import Contacts from './contacts';

class Lists extends Component {
    state = {
        contacts : []
    }

    render() {
        
    return (
        <div>


            <Contacts contacts={this.state.contacts} />
                            
        </div>
        
        )};

        componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }

}

export default Lists;