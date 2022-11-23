//에러를 처리하는 방법
// try catch finally  

function func1(){
  throw new Error('func1 에러났음!!!!');    //강제 에러발생
  return 'func1함수의 리턴값';
}

function func2(aa){
  let content;
  try{
    const content = func1(aa);
  }
  catch(bb) {  //에러가 났을때 처리방법
    console.log('catch부분-name ',bb.name); 
    console.log('catch부분-message ',bb.message); //에러의 메세지
    console.log('catch부분-stack ',bb.stack);  //에러가 나온 경로(흐름)
    content = '기본내용';    //func1에서 결과값을 리턴하지 못할때, 강제로 내용을 넣어줌
  }
  finally {     
    console.log('성공하든 실패하든 마지막으로 리소스를 정리!')
  }
  
  const result = 'hi ' + content;
  return result;
}

const result = func2('하하하');
console.log(result);