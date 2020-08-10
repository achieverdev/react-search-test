import React from "react";
import User from "./UserItem";
import { Row } from 'react-bootstrap';
const UserList = (props) => {
  const {users} = props;
  return (
    <Row className="user-list">
      { users && users.length? 
        users.map((user, index) => {
            return <User key={`user-${user.id}`} user={user} index={index}/>;
        }) : ''
      }
    </Row>
  );
}

export default UserList;
