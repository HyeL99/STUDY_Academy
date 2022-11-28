import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Videos = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate(); //useNavigate 훅을 이용해서 navigate를 받아옴

  const handleSubmit = (e) => {
    e.preventDefault();
    let link = `/videos/${text}`;
    setText('');
    navigate(link); //입력된 경로로 연결
  }
  const handleChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <h2>📹Videos - Videos 페이지 입니다.</h2>
      <br />
      <p>이 페이지는 리액트 라우터 기초를 연습해보는 페이지입니다.</p>
      <p>세부 페이지로 가봅시다.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='video id 입력' value={text} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Videos