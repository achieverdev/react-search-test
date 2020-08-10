import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchView from '../Search/Search';
import './App.css';

function AppMain() {
  return (
    <Container fluid="lg"> 
    <Row>
      <Col>
        <header className="App-header text-center"> User Search App</header>
      </Col>
    </Row>
    <Row>
      <Col>
        <SearchView></SearchView>
      </Col>
    </Row>  
    </Container>
  );
}

export default AppMain;
