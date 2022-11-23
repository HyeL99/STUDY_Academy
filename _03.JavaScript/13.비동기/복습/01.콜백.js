const increaseAndPrint = (n, callback) => {
  setTimeout(()=>{
    let increased = n+1;
    console.log(increased);

    if(callback){
      callback(increased);
    }
  },1000)
}

const callback = (item) => {
  increaseAndPrint(item);
}

increaseAndPrint(0,(n)=>{
  increaseAndPrint(n,(n)=>{
    increaseAndPrint(n,(n)=>{
      increaseAndPrint(n,(n)=>{
        increaseAndPrint(n,(n)=>{
          increaseAndPrint(n,()=>{
            console.log('작업끝!')
          })
        })
      })
    })
  })
});