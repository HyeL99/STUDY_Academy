/*
    async 응용
    - 🐔🐣🐤🥚🍳
*/

function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} --> 🥚`);
}

function freyEgg(egg) {
    return Promise.resolve(`${egg} --> 🍳`);
}
function getChicken() {
    return Promise.reject(new Error('닭을 가지고 올 수 없음!'))
}

// getChicken()
// .catch((error)=>{
//     console.log(error);
//     return '🎁';
// })
// .then(fetchEgg)
// .then(freyEgg)  //축약형
// .then(console.log)

async function makeEggFried(){
    let item;
    try{
        item = await getChicken();
    }
    catch {
        item = '🎁';
    }
    const egg = await fetchEgg(item);
    return freyEgg(egg);
}
makeEggFried()
.then(console.log)
