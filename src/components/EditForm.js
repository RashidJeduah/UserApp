import React, {Component} from "react";
import {connect} from 'react-redux';
import {editUser} from '../Store/userActions';

export class EditForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: props.user.name,
        email: props.user.email,
      };
      this.id = props.match.params.id
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    }

      handleSubmit = e => {
        e.preventDefault();
        const updatedInfo= {
            name: this.state.name,
            email: this.state.email,
        };
        this.props.editUser(this.id, updatedInfo);
        this.setState({
            name:"",
            email:""
        });
      }

      render() {
        return (
          <div className="App">
            {/* Form to add new user */}
            <div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" 
                value={this.state.name}
                onChange={this.handleNameChange}
                />
                <br />
                <input type="email" placeholder="Email" 
                value={this.state.email}
                onChange={this.handleEmailChange}
                />
                <br />
                <button type='submit'>Update user</button>
              </form>
            </div>
           </div> 
        )
        }
} 

const mapStateToProps =(state, ownProps) => ({
    users: state.users.find(user => user.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
    editUser: editUser
}

      export default connect (mapStateToProps, mapDispatchToProps)(EditForm); 