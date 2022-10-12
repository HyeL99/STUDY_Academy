// 동기적 - 하나씩 차근차근
// 응답을 기다림

function a(){         //호출4   //호출5  1반환후 함수 b()로 감  
  // for(let i = 0; i < 100000000; i++); 
  // 이걸 수행하게 하면 result값이 나올때까지 시간이 무지 걸림 -> 동기화의 단점  
  return 1;
}
function b(){         //호출3   //호출6
  return a() + 1;
}
function c(){        //호출2    //호출7
  return b() + 1;
}

const result = c();  //호출1    -함수c()에서 반환된 값이 result로 들어와서 출력 
console.log(result);  