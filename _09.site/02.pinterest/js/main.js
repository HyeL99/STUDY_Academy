const $section = document.querySelector('section');
const $filterBtns = document.querySelectorAll('.btns li'); //배열 스타일

window.addEventListener('load',function(){
  const iso = new Isotope( $section, {
    // options
    itemSelector: 'article',
    //layoutMode: 'masonry'
  });

  for(let $button of $filterBtns) { // $filterBtns의 item갯수만큼 반복
    $button.addEventListener('click',function(e){
      e.preventDefault();
      
      // 클릭할 때마다 각 아이템의 on클래스 삭제
      for(let $button of $filterBtns) {
        $button.classList.remove('on');
      }

      //클릭한 버튼에 클래스on 부여
      e.currentTarget.classList.add('on');

      //filtering
      //클릭한 버튼에 있는 a태그의 속성 href의 value값 가져옴
      const filtering = document.querySelector('.on a').getAttribute('href')
      console.log(filtering)

      //버튼을 누르면 필터링 작동 (플러그인 사용)
      iso.arrange({filter:filtering});
    })
  }
})