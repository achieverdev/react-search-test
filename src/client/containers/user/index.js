import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { getData, editUser } from "../../redux/actions";
import ENUMS from '../../config/ENUMS';
import UserForm from '../../components/user/UserForm';

function UserFormContainer(props) {
  const editItemId = props.match.params.id;
  const {users, editUser, getData, history} = props;
  const getUser = (editItemId) => {
    if (users.length === 0) {
      getData();
    }
    const editItem = users.filter(item=> Number(item.id) === Number(editItemId));
    if (editItem.length > 0) {
      return editItem[0];
    }
    return editItem;
  }

  const doEdit = (updatedData) => {
    editUser(updatedData);
    history.push({
      pathname: ENUMS.ROUTES.HOME
    });
  }

  let editItem = getUser(editItemId);    
  return (
    <Fragment>
      <Container className="p-4">
        <Row>
          <Col>
            <h5 className="text-center">
              Edit user details:
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <UserForm editItem={editItem} editUser={doEdit}></UserForm>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getData: getData,
  editUser: editUser
}, dispatch);

const mapStateToProps = (state) => ({
  users: state.user.user_data,
  search_result: state.user.search_result
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserFormContainer));