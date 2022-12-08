import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import styles from './SearchBox.module.css'

const SearchBox = () => {
  return (
    <div>
      <form action="">
      <Form.Label>Search</Form.Label>
        <Row>
          <Col xs md={9} xl={10}>
            <Form.Control type="text" className='outline' placeholder="이름을 입력해주세요" />
          </Col>
          <Col xs md={3} xl={2}>
            <Button variant="success" type="submit">
              찾기
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default SearchBox