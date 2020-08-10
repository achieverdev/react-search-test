import React from "react";
import ENUMS from "../../config/ENUMS";
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const UserItem = ({ user, index }) => (
  <Row className="user-item m-0 mt-2 p-2">
    <Col xs={10} md={11} lg={11} className="p-0">
      <span>{index + 1}.</span> <span></span>{user.title}
    </Col>
    <Col xs={2} md={1} lg={1} className="p-0">
      <Link to={`${ENUMS.ROUTES.EDIT}/${user.id}`}>
        <Button className="ml-2">Edit</Button>
      </Link>
    </Col>
  </Row>
);

export default UserItem;
