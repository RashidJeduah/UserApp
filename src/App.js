import React from "react";
import "./App.css";
import UserItem from "./components/UserItem"
import {connect} from 'react-redux';
import { addUser } from "./Store/userActions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      users:[],
    };

    this.handleNameChange= this.handleNameChange.bind(this);
    this.handleEmailChange= this.handleEmailChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
    console.log(this.state.name)
  }

  handleEmailChange(e){
    this.setState({email: e.target.value});
    console.log(this.state.email)
  }

  handleSubmit(e){
    e.preventDefault();
    let newUser={name:this.state.name, email:this.state.email };
    this.setState({users: [...this.state.users, newUser] });
  }

  addNewUser = newUser => {
    this.props.addUser(newUser)
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
            <input type="submit" />
          </form>
        </div>

        {/* List of users */}
        <div>
          {this.props.users.map((user, index) => {
            return (
              <UserItem
                key={index}
                name={user.name}
                email={user.email}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users:state.users  
});

const mapDispatchToProps = {
  addUser: addUser
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
