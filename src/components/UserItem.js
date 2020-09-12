import React from "react";

const UserItem = ({name, email}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h3>Email: {email}</h3>
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