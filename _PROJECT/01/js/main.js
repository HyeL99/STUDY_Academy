// NOTICE LIST
let noticeList = [
    {
        type : 'notice',
        title :'마스크 착용하고, 안심 아웃백 함께 만들어요!',
        date : '2020-09-25',
        link : 'notice01.html',
        fix : true
    },
    {
        type : 'notice',
        title :'딜리버리 운영매장 안내',
        link : 'notice02.html',
        date : '2022-10-05',
        fix : false
    },
    {
        type : 'notice',
        title :'아웃백 영업 종료 매장 안내',
        date : '2022-09-27',
        link : 'notice03.html',
        fix : false
    },
    {
        type : 'notice',
        title :'2023년 부메랑 멤버십 리뉴얼 안내',
        date : '2022-09-01',
        link : 'notice04.html',
        fix : false
    },
    {
        type : 'notice',
        title :'개인정보처리방침 개정 안내',
        date : '2022-06-14',
        link : 'notice05.html',
        fix : false
    },
    {
        type : 'notice',
        title :'아웃백 안내문',
        date : '2022-03-23',
        link : 'notice06.html',
        fix : false
    }
];

//NEWS LIST
let newsList = [
    {
        type : 'news',
        title :'아웃백 스테이크하우스, 한정 세트 메뉴 ‘토마호크 프리미엄 초이스’ 출시',
        date : '2022-04-26',
        link : 'news01.html',
        fix : false
    },
    {
        type : 'news',
        title :'아웃백 스테이크하우스, 전남대학교 어린이병원에 연말 선물 증정',
        date : '2021-12-27',
        link : 'news02.html',
        fix : false
    },
    {
        type : 'news',
        title :'아웃백 스테이크하우스, 10번째 프리미엄 와인 특화 매장 하남 스타필드점 오픈',
        date : '2021-12-13',
        link : 'news03.html',
        fix : false
    },
    {
        type : 'news',
        title :'아웃백, 배달앱 전용 크리스마스 세트 메뉴 한정 판매',
        date : '2021-12-01',
        link : 'news04.html',
        fix : false
    },
    {
        type : 'news',
        title :'아웃백 스테이크하우스, 전국 딜리버리 전용 매장 40호점 돌파',
        date : '2021-11-25',
        link : 'news05.html',
        fix : false
    },
    {
        type : 'news',
        title :'아웃백 스테이크하우스, 몰스킨 다이어리 증정 SNS 이벤트 진행',
        date : '2021-11-24',
        link : 'news06.html',
        fix : false
    }
];

// ALL BOARD LIST
let allList = noticeList.concat(newsList);

function setBoard(state){
    $(this).addClass('active');
    $('#boardBox').children().remove();
    let list;
    
    switch(state){
        case 'all':
            list = new Array(allList).flat();
            list = list.sort((a,b)=>(new Date(b.date) - new Date(a.date)))
            break;
        case 'news':
            list = new Array(newsList).flat();
            list = list.sort((a,b)=>(a.date - b.date))
            break;
        case 'notice':
            list = new Array(noticeList).flat();
            list = list.sort((a,b)=>(a.date - b.date))
            break;
    }
    console.log(list);
    let fixedItem = list.filter((item)=>item.fix == true);
    let nonFixedItem = list.filter((item)=>item.fix == false);
    if(fixedItem.length>0){
        fixedItem.map((item,index)=>{
            if(index < 6){
                $('#boardBox').append(
                    `<li>
                        <a href="${item.link}">
                            <span>${item.type}</span>
                            <div class="boardText flex jusSpaBet alnCen">
                                <h3>${item.title}</h3>
                                <span>공지</span>
                            </div>
                        </a>
                    </li>`
                );
            }
        });
    }
    if(fixedItem.length <6) {
        nonFixedItem.map((item,index)=>{
            if(index < 6-fixedItem.length){
                $('#boardBox').append(
                    `<li>
                        <a href="${item.link}">
                            <span>${item.type}</span>
                            <div class="boardText flex jusSpaBet alnCen">
                                <h3>${item.title}</h3>
                                <span>${item.date}</span>
                            </div>
                        </a>
                    </li>`
                );
            }
        })
    }
}

setBoard('all')
$('#allBtn').click(function(){
    $(this).siblings().removeClass('active');
    setBoard('all');
});
$('#noticeBtn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    setBoard('notice');
});
$('#newsBtn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    setBoard('news');
});

$('#main05 .contentWrap .front button').click(function(){
    $('#main05 .contentWrap').addClass('active');
});
$('#main05 .contentWrap .back button.backBtn').click(function(){
    $('#main05 .contentWrap').removeClass('active');
});

$('#gnbBtn').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
    $('.menuWrap').toggleClass('active');
});
$('.gnbList a').click(function(){
    $(this).siblings('.gnbSub').slideToggle();
    $(this).parent('li').toggleClass('active');
    $(this).children('button').children('i').toggleClass('fa-caret-down');
    $(this).children('button').children('i').toggleClass('fa-caret-up');
});

$(function(){
    if( $(window).width() > 767) {
        $('ul.gnbSub').slideDown();
    } else {
        $('ul.gnbSub').slideUp();
    }
    
    $(window).resize(function(){
        const winW = $(window).width();
        console.log(winW);

        if(winW > 767) {
            $('ul.gnbSub').slideDown();
        } else {
            $('li:not(.active) ul.gnbSub').slideUp();
            $('li.active ul.gnbSub').slideDown();
        }
    });

    // 슬라이드 페이징 기능
    let $slickElement = $('#slideContainer');
    let $status = $('#pagingWrap .numbers')
    let enableNav = true;
    
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        // no dots -> no slides
        if(!slick.$dots){
            return;
        }
        
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        // use dots to get some count information
        $status.html('<span class = "currentPage">' + '0' + i + '</span> ' + ' / 0' + (slick.$dots[0].children.length));
    });

    // select 관련 js
    let state = $('#gnbSelect option:selected').text();
    console.log(state);
    let optionList;
    let selectInner='';

    for(let item of subList){
        if(item.name == state){
            optionList = item.list;
        }
    }
    console.log(optionList)
    let num = 1;
    for (let item of optionList){
        selectInner += `<option value="${item.link}" id="menu${num}">${item.title}</option>`;
        num++;
    }
    $('#gnbSubSelect').html(selectInner);

    $('#slideContainer').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $("#slickPrevBtn"),
        nextArrow: $("#slickNextBtn"),
    });
});