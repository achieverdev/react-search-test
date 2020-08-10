import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';
import UserList from '../../components/user/UserList';
import SearchInput from '../../components/search/SearchInput';
import { getData, setFilter } from "../../redux/actions";
import user from '../user';

function SearchView(props) {
  const { loading, users, getData, searchData} = props;
  const [usersData, updateUserData] = useState(users);

  useEffect(() => {
    if (users.length === 0) {
      getData();
    }
  });

  const filterData = (searchValue) => { 
    let result_user = [];
      if(searchValue) {
        result_user = users.filter(useritem =>
        useritem.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      )
      updateUserData(result_user);
    } else {
      result_user = users;
      updateUserData(result_user);
    }
    return result_user;
  };

  const getRenderList = () => {
    if(loading) {
      return 'Loading...';
    } else {
      let renderUser = []
      if(usersData.length > 0) {
        renderUser = usersData;
      } else {
        renderUser = users;
      }
      return <UserList users={renderUser}></UserList>;
    }
  }

  return (
    <Container>
      <Row className='search-view p-2 text-center'>
        <Col>
          <SearchInput users={users} searchData={searchData} filterData={filterData}></SearchInput>
        </Col>
      </Row>
      <Row>
        <Col>
          {getRenderList()}
        </Col>
      </Row>
    </Container>
   
  )
}

const mapStateToProps = (state) => ({
  users: state.user.user_data,
  loading: state.user.loading,
  search_result: state.user.search_result
})

const mapDispatchToProps = dispatch => bindActionCreators({
  searchData: setFilter,
  getData: getData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);

