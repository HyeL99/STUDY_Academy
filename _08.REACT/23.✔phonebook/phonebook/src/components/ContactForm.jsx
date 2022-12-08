import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  const getData = (e) => {
    e.preventDefault();
    dispatch({type:'ADD_CONTACT',payload:{name:name, phoneNumber:phoneNumber}})
    setName('');
    setPhoneNumber('');
  }
  return (
    <div>
      <Form onSubmit={getData}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} placeholder="이름을 입력해주세요" className='outline' onChange={e =>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="tel" value={phoneNumber} pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}" maxLength="13" placeholder="ex. 000-0000-0000" className='outline' onChange={e =>setPhoneNumber(e.target.value)}/>
        </Form.Group>
        <Button variant="success" type="submit">
          추가
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm