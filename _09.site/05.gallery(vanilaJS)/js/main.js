$(function(){
    const $btn = $('.nav ul li a'); //버튼 역할하는 nav a를 변수로
    const imageList = [
        {
            company: '해태htb',
            title:'해태 모바일 사이트 리뉴얼',
            bigImg:'./img/big/01.png',
            thumb:'./img/01.jpg',
            type:'Mobile',
            class:['all','mobile']
        },
        {
            company: '코카-콜라음료(주)',
            title:'코카콜라 모바일 사이트 리뉴얼',
            bigImg:'./img/big/02.png',
            thumb:'./img/02.jpg',
            type:'Mobile',
            class:['all','mobile']
        },
        {
            company: '대교',
            title:'트니트니 모바일 앱 & 홍보웹',
            bigImg:'./img/big/03.png',
            thumb:'./img/03.jpg',
            type:'Web / Mobile / Tablet / APP',
            class:['all','mobile','web','tablet']
        },
        {
            company: '녹십자',
            title:'Dr.PNT 온라인몰',
            bigImg:'./img/big/04.png',
            thumb:'./img/04.jpg',
            type:'>Web / Tablet',
            class:['all','web','tablet']
        },
        {
            company: '튼튼영어',
            title:'주니어플러스 사이트 구축',
            bigImg:'./img/big/05.png',
            thumb:'./img/05.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: 'KBS',
            title:'재난포털 리뉴얼',
            bigImg:'./img/big/06.png',
            thumb:'./img/06.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: 'KBS',
            title:'재난포털 리뉴얼',
            bigImg:'./img/big/07.png',
            thumb:'./img/07.jpg',
            type:'Web / Tablet',
            class:['all','web','tablet']
        },
        {
            company: 'LG생활건강',
            title:'L STORY Web & Mobile & App',
            bigImg:'./img/big/08.png',
            thumb:'./img/08.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet','motion']
        },
        {
            company: '뉴스킨코리아',
            title:'콘텐츠 허브 플랫폼 Web & Mobile',
            bigImg:'./img/big/09.png',
            thumb:'./img/09.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: 'LG생활건강',
            title:'NATURE COLLECTION 리뉴얼',
            bigImg:'./img/big/10.png',
            thumb:'./img/10.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: '웅진씽크빅',
            title:'스마트올 사이트 구축',
            bigImg:'./img/big/11.png',
            thumb:'./img/11.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet','award']
        },
        {
            company: 'LG하우시스',
            title:'고객서비스 사이트 구축',
            bigImg:'./img/big/12.png',
            thumb:'./img/12.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: 'LG HAUSYS',
            title:'미국법인 리뉴얼',
            bigImg:'./img/big/13.png',
            thumb:'./img/13.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet','award']
        },
        {
            company: 'LG생활건강',
            title:'중국 역직구몰 신규 구축',
            bigImg:'./img/big/14.png',
            thumb:'./img/14.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: '삼양사',
            title:'상쾌환 신규 구축',
            bigImg:'./img/big/15.png',
            thumb:'./img/15.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: 'LG Hausys',
            title:'LG Hausys GLOBAL 리뉴얼',
            bigImg:'./img/big/16.png',
            thumb:'./img/16.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet','motion']
        },
        {
            company: 'BARISTA PAUL BASSETT',
            title:'바리스타 폴바셋 사이트 구축',
            bigImg:'./img/big/17.png',
            thumb:'./img/17.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: '대교',
            title:'eye level global 리뉴얼',
            bigImg:'./img/big/18.png',
            thumb:'./img/18.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet','award']
        },
        {
            company: '상하농원',
            title:'상하농원 파머스빌리지 사이트 구축',
            bigImg:'./img/big/19.png',
            thumb:'./img/19.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet']
        },
        {
            company: 'Reebok',
            title:'온라인 스토어 리뉴얼',
            bigImg:'./img/big/20.png',
            thumb:'./img/20.jpg',
            type:'Web / Mobile / Tablet',
            class:['all','mobile','web','tablet','award']
        }
    ];


    // 버튼 필터링 설정
    $btn.click(function(){
        $btn.removeClass('active');
        $(this).addClass('active');
    });
    $('.btnAll').click(function(){
        $('.all').show();
    })
    $('.btnWeb').click(function(){
        $('.all').hide();
        $('.web').show();
    });
    $('.btnMobile').click(function(){
        $('.all').hide();
        $('.mobile').show();
    });
    $('.btnMotion').click(function(){
        $('.all').hide();
        $('.motion').show();
    });
    $('.btnAward').click(function(){
        $('.all').hide();
        $('.award').show();
    });

    //이미지 삽입
    let innerListHTML = '';
    imageList.map((item)=>{
        let classList = '';
        item.class.map((list)=>{classList += `${list} `})
        //console.log('classList :'+classList);
        innerListHTML += `
        <li class="${classList}">
            <div class='galleryPic'>
                <div class='picInner'>
                    <button class="close">X</button>
                    <img src="${item.bigImg}" alt="${item.title}">
                    <button class="prev">prev</button>
                    <button class="next">next</button>
                </div>
            </div>
            <a class="picture">
                <img src="${item.thumb}" alt="${item.title}">
                <div class="detail">
                    <p class="title">
                        ${item.company}
                        <strong>${item.title}</strong>
                    </p>
                    <p class="type">${item.type}</p>
                </div>
            </a>
        </li>`;
    });
    $('.thumb').append(innerListHTML);
    $('.thumb li:first-child').addClass('first');
    $('.thumb li:last-child').addClass('last');

    $('.close').click(function(){
        $('.galleryPic').removeClass('active');
    });

    const data=0;
    $('.thumb li a.picture').click(function(){
        $(this).siblings('.galleryPic').addClass('active')
    });

    $('.prev').click(function(){
        $(this).parent('.picInner').parent('.galleryPic').removeClass('active');
        if($(this).parent('.picInner').parent('.galleryPic').parent('li').hasClass('first')){
            $('.thumb li:last-child .galleryPic').addClass('active');
        }else{
            $(this).parent('.picInner').parent('.galleryPic').parent('li').prev().children('.galleryPic').addClass('active');

        }
        
    })
    $('.next').click(function(){
        $(this).parent('.picInner').parent('.galleryPic').removeClass('active');
        if($(this).parent('.picInner').parent('.galleryPic').parent('li').hasClass('last')){
            $('.thumb li:first-child .galleryPic').addClass('active');
        }else{
            $(this).parent('.picInner').parent('.galleryPic').parent('li').next().children('.galleryPic').addClass('active');

        }
    })
})