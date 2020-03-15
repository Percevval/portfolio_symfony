import React, {Component} from 'react';
import axios from 'axios';
    
class Contact extends Component {
    constructor() {
        super();
        // this.state = { users: [], loading: true};
    }
    
    componentDidMount() {
        // this.getUsers();
    }
    
    getUsers() {
    //    axios.get(`http://localhost:8000/api/users`).then(users => {
    //        this.setState({ users: users.data, loading: false})
    //    })
    }
    
    render() {
        return(
            <div>
                <div class="h1 text-center">ICI CONTACT</div>
            </div>
        )
    }
}
export default Contact;