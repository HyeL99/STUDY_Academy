const bigs =[
  'img/big/img01_big.png',
  'img/big/img02_big.png',
  'img/big/img03_big.png',
  'img/big/img04_big.jpg',
  'img/big/img05_big.jpg',
  'img/big/img06_big.jpg',
  'img/big/img07_big.png',
  'img/big/img08_big.jpg',
  'img/big/img09_big.jpg',
  'img/big/img10_big.jpg',
  'img/big/img11_big.jpg',
  'img/big/img12_big.jpg',
  'img/big/img13_big.jpg',
  'img/big/img14_big.jpg',
  'img/big/img15_big.jpg',
  'img/big/img16_big.jpg',
  'img/big/img17_big.jpg',
  'img/big/img18_big.jpg',
  'img/big/img19_big.jpg',
  'img/big/img20_big.jpg',
] 



const $thumbBtn =$('.thumb>li');  //썸네일 버튼

$thumbBtn.click(function(e){
  e.preventDefault();
  let num = $(this).index();
  //console.log('몇번째 썸네일이에요?', num)

  $('#modal').css({"display":"flex"});
  $('#modal').find('img').attr('src',bigs[num])

  let aa = $(this).find('.title').html(); //클릭한 li안의 .title에있는 내용
  let bb = $(this).find('.type').text();
  
  $('#modal').find('.title').html(aa);

})

$('#modal').click(function(){
  $(this).hide();
})