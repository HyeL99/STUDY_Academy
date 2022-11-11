const $items = document.querySelectorAll('article');

for (let $item of $items){
  $inner = $item.querySelector('div')

  $inner.addEventListener('mouseenter',function(e){
    $item.classList.add('back')
    console.log(e.currentTarget)
    e.currentTarget.querySelector('video').play();
  });

  $inner.addEventListener('mouseleave',function(e){
    $item.classList.remove('back')
    console.log(e.currentTarget)
    e.currentTarget.querySelector('video').pause();
  });
}