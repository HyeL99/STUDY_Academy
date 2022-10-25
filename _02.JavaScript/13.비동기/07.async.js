/*
    then들이 중복으로 배치되고 더 복잡해짐 -> 깔끔하게
    비동기적인 코드들이 동기적(절차적)으로 보이게 함

*/
function getBanana() {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve('🍌')},3000);
    });
}
function getApple() {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve('🍎')},1000);
    });
}

//바나나와 사과를 가지고 와서 배열로
// getBanana()
// .then((itemBanana)=>
//     getApple()
//     .then((itemApple)=>{
//         return [itemBanana, itemApple]
//     })
// )
// .then(console.log);


// async 붙이면 비동기인 프로미스가 호출되며, 내부를 동기적인 코드로 작성 가능하게 한다.
// 
async function fetchFruits(){
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple]
}
fetchFruits()
.then(console.log)