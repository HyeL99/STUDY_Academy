import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './Login.scss'
// 리액트 부트스트랩을 이용하여 로그인폼 생성
const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  
  const loginUser = (e) => {
    e.preventDefault(); //새로고침방지
    setAuthenticate(true);
    navigate('/') //첫페이지로 간다
  }
  return (
    <Container className='loginArea'>
      <Form className='loginForm' onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Login