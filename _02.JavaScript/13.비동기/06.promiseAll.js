// function getBanana() {
//     setTimeout(()=>{console.log('🍌')},1000);
// }
// getBanana();

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
// getApple()
// .then((item)=>console.log(item))


function getGreenApple() {
    return Promise.reject(new Error('no 🍏'));
}
// getGreenApple()
// .then((item)=>console.log(item))
// .catch((item)=>console.log(item))

// 바나나와 사과를 가지고 와서 배열로 만듦
getBanana() // 3+1 (4초간 진행)
.then((itemBanana)=>
    getApple()
    .then((itemApple)=>{
        return [itemBanana, itemApple]
    })
)
.then(console.log);

// Promise.all 한번에 모든 Promise들을 동시에 실행
Promise.all([getBanana(),getApple()]) // 3||1 (3초간 진행)
.then((items)=>console.log('all',items))

// Promise.race 주어진 Promise들 중에 제일 빨리 수행된 것만 노출
Promise.race([getBanana(),getApple()])
.then((item)=>console.log('race',item))

Promise.all([getBanana(),getApple(),getGreenApple()])
.then((item)=>console.log('all-error',item))
.catch(console.log)

// Promise.allSettled 여러 Promise들을 동시에 처리, 실패한 프로미스가 있어도 무조건 실행
Promise.allSettled([getBanana(),getApple(),getGreenApple()])
.then((item)=>console.log('allSettled',item))
.catch(console.log)