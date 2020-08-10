import React from "react";
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import User from "./UserItem";

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

UserList.propTypes = {
  users: PropTypes.array.isRequired
};
export default UserList;
