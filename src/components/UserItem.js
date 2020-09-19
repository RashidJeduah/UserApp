import React from "react";
import {Link} from 'react-router-dom';

const UserItem = ({name, email, id, removeUser}) => {
  const handleClick = () => {
    removeUser(id)
  }
  return (
    <div>
      <h1>Name: {name}</h1>
      <h3>Email: {email}</h3>
      <button onClick={handleClick}>Remove user</button>
      <Link to={`/edit/${id}`}>Edit user</Link>
      <hr/>
    </div>
  );
};

export default UserItem;

/*class UserItem extends React.Component {
  // You can also do - "class UserList extends Component",
  // just that you'd have to import React this way -
  // import React, {Component} from "react".
  

  render(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <h3>{props.email}</h3>
      </div>
    );
  }
}*/