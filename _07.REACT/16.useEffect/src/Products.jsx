//무한 루프에 빠진 fetch를 한번만 불러옴
//useEffect() hook은 react component가 랜더링 될때마다 특정 작업을 실행
import React, { useState, useEffect } from 'react'

const Products = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('db/db.json')
    .then(res => res.json())  //json함수 호출, 불러온 문서가 json 파일임을 의미
    .then(res => {
      console.log('데이터 받아옴',res)
      setProducts(res);
    })//data를 응답받은 후의 로직, fetch가 계속 일어남
    return ()=>{
      //컴포넌트가 언마운트 될 때
      console.log('깨끗하게 청소하는 일을 합니다.')
    }
  },[])
  

  return (
      <>
      <ul>
        {products.map((item,index)=> (
          <li key={index}> 
            <h3>제품명 : {item.name}</h3>
            <p>가격 : {item.price}</p>
          </li>
        ))}
      </ul>
      <button
      style={{border: "1px solid orange", padding:"10px 20px", margin: "10px",background:'yellow'}}
      onClick={()=>setCount(count+1)}
      >{count}</button>
    </>
  )
}

export default Products

/*
  **** json 파일 로드 방법 ****
  fetch('api 주소')
  .then(res => res.json())  // json파일로 만들어줘
  .then(res => {})          // data를 응답받은 후의 로직
*/
/*
  **** useEffect 기본 문법 ****
  useEffect(()=>{},[deps])
  // deps가 변경될 때 마다 useEffect 내부함수 실행
  // deps를 비워놓으면 아무런 디펜던시가 전달되지 않음(처음 로드될 때 딱 한번 실행)
*/