/*
    promise 응용
    - 🐔🐣🐤🥚🍳
*/

function fetchEgg(chicken) {
    // return new Promise(resolve,reject);
    return Promise.resolve(`${chicken} --> 🥚`);    //static method - resolve
}

function freyEgg(egg) {
    // return new Promise(resolve,reject);
    return Promise.resolve(`${egg} --> 🍳`);    //static method - resolve
}
function getChicken() {

    // return new Promise(resolve,reject);
    // return Promise.resolve(`🌿 --> 🐔`);    //static method - resolve
    return Promise.reject(new Error('닭을 가지고 올 수 없음!'))
}

getChicken()
.catch((error)=>{
    console.log(error);
    return '🎁';
})
.then((item)=>{return fetchEgg(item)})
// .then((item)=>{return freyEgg(item)})
.then(freyEgg)  //축약형
.then((item)=>{console.log(item)})
