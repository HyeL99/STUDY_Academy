import React from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요" className='outline'/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요" className='outline'/>
        </Form.Group>
        <Button variant="success" type="submit">
          추가
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm