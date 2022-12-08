import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './App.module.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className={styles.App}>
      <h1>PHONE BOOK</h1>
      <Container>
        <Row>
          <Col><ContactForm /></Col>
          <Col><ContactList /></Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;

/*
  설치한 것]
  $ npm install react-bootstrap bootstrap
  $ yarn add redux
  $ yarn add react-redux
*/