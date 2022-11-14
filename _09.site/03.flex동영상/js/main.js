const $items = document.querySelectorAll('article');
const $aside = document.querySelector('aside');
const $close = document.querySelector('aside span');

//article에 hover가 되었을 때 동영상 play

for (let $item of $items){
  //article에 hover가 되었을 때 동영상 play
  $inner = $item.querySelector('div')

  $inner.addEventListener('mouseenter',function(e){
    $item.classList.add('back')
    e.currentTarget.querySelector('video').play();
  });

  $inner.addEventListener('mouseleave',function(e){
    $item.classList.remove('back')
    e.currentTarget.querySelector('video').pause();
  });

  //article을 클릭하면  aside가 튀어나옴
  $item.addEventListener('click',function(e){
    $aside.classList.add('on');
    const title = e.currentTarget.querySelector('h2').innerText;
    const desc = e.currentTarget.querySelector('p').innerText;
    const videoSrc = e.currentTarget.querySelector('video').getAttribute('src')

    $aside.querySelector('h2').innerText = title;
    $aside.querySelector('p').innerText = desc;
    $aside.querySelector('video').setAttribute('src',videoSrc);
    $aside.querySelector('video').play();
  });
}

//aside 안의 close버튼을 누르면 aside가 들어감
$close.addEventListener('click',function(){
  $aside.classList.remove('on');
  $aside.querySelector('video').pause();
})

