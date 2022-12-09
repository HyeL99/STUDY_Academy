import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState(''); //입력값 인식

  const search = (e) => {
    e.preventDefault();
    dispatch({type:'SEARCH', payload:keyword})
    setKeyword('');
  }
  return (
    <div>
      <form onSubmit={search}>
      <Form.Label>Search</Form.Label>
        <Row>
          <Col xs md={9} xl={10}>
            <Form.Control type="text" value={keyword} onChange={(e)=> setKeyword(e.target.value)} className='outline' placeholder="이름을 입력해주세요" />
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