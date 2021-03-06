import React from "react";
import "./App.css";
import UserItem from "./components/UserItem"
import {connect} from 'react-redux';
import { addUser, deleteUser, getAllUsers } from "./Store/userActions";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
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
  };

  handleSubmit(e){
    e.preventDefault();
    console.log("submit",this.state );
    let newUser={name:this.state.name, email:this.state.email };
    this.props.addUser(newUser)
    // this.setState({users: [...this.state.users, newUser] });
  };

  componentDidMount() {
    this.props.getAllUsers();
  } 

  deleteUser = user_id =>
  this.props.deleteUser(user_id); 

  render() {
    return (
      <div className="App">
        {/* Form to add new user */}

        <button>Logout</button>
        <hr/>

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
            <button type='submit'>Add user</button>
          </form>
        </div>

        {/* List of users */}
        <div>
          {this.props.users.map((user) => {
            return (
              <UserItem
                key={user.id}
                id= {user.id}
                name={user.name}
                email={user.email}
                removeUser ={this.deleteUser}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
  users:state.usersState.users,  
  };
};

const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
  getAllUsers: getAllUsers
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
