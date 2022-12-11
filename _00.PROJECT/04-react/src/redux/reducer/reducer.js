const initialState = {
  skills:[
    {name:'HTML',percent:'90%'},
    {name:'CSS',percent:'90%'},
    {name:'JavaScript',percent:'90%'},
    {name:'React',percent:'80%'},
    {name:'C',percent:'75%'},
    {name:'illustrator',percent:'70%'},
    {name:'Figma',percent:'90%'}
  ],
  projects:[
    {
      id:'project01',
      name:'OUTBACK Redesign',
      working:'2022.10.03 - 2022.10.20 (3주)',
      contribution:'개인작업 (100%)',
      tool:'HTML,CSS,jQuery',
      page:'main + sub*9',
      contents:`
        기존의 메뉴 소개가 중심이 되는 아웃백 사이트와는 다르게 ‘아웃백 스테이크 하우스’이라는 회사 소개에 좀 더 집중하여 홈화면을 리디자인하였으며, 반응형도 적용하였습니다.
        <br /><br />
        홈화면의 메인배너는 slick  플러그인을 이용하여 슬라이드로 볼 수 있도록 하였고,
        뉴스와 공지를 한 부분으로 합쳐서 최신순으로 홈화면에서 볼 수 있도록 제작했으며, 뉴스와 공지에 따른 필터링 기능도 추가하였습니다.
        <br /><br />
        서브페이지에서는 드롭다운 메뉴를 통해 페이지를 전환할 수 있습니다.
      `
    },
    {
      id:'project02',
      name:'일정관리앱 - 나의 시간',
      working:'2022.11.07 - 2022.12.01 (1개월)',
      contribution:'개인작업 (100%)',
      tool:'HTML,CSS,JS,jQuery',
      page:'main + sub*4',
      contents:`
        일정 관리에 관련된 모든 정보를 한번에 관리할 수 있는 웹앱을 제작했습니다.
        <br /><br />
        총 여섯가지의 기능을 구현했습니다.<br />
        - 공휴일과 일정이 포함된 달력 렌더링<br />
        - 스케줄 관리<br />
        - 일기 기록 관리<br />
        - 할 일 관리<br />
        - 디데이 관리<br />
        - 타임라인 관리
        <br /><br />
        달력에서 아이콘을 통해 다양한 정보를 확인할 수 있도록 하였습니다.
        <br /><br />
        하단바의 아이콘을 클릭하여 타이머 기능을 통해 당일의 타임라인을 추가할 수 있습니다.
      `
    },
    {
      id:'project03',
      name:'쇼핑몰 사이트',
      working:'2022.11.28 - 2022.12.06 (9일)',
      contribution:'개인작업 (100%)',
      tool:'React, Sass',
      page:'main + sub*2',
      contents:`
        json파일에 저장된 쇼핑목록에 대한 데이터를 받아와서 상품들을 나타낸 사이트입니다.
        <br /><br />
        로그인이 되었을 때에만 상품의 상세페이지를 볼 수 있도록 하였고, 검색 기능을 구현하였습니다.
        <br /><br />
        레이아웃과 로그인 폼은 부트스트랩을 이용하였습니다.
      `
    },
    {
      id:'project04',
      name:'투두리스트',
      working:' 2022.11.14 - 2022.11.23 (10일)',
      contribution:'개인작업 (100%)',
      tool:'React, CSS',
      page:'main',
      contents:`
        투두리스트에 투두아이템을 추가, 삭제할 수 있고, 좌상단 버튼을 통해 다크 모드를 설정할 수 있습니다. 해당 투두 아이템을 완료했는지에 따라서 필터링도 가능합니다.
        <br /><br />
        window.localStorage를 이용하여 등록한 투두리스트와 다크모드 설정을 유지하도록 하였습니다.
      `
    },
    {
      id:'project05',
      name:'메신저 프로그램',
      working:'2022.10.27 - 2022.11.02 (1주)',
      contribution:'개인작업 (100%)',
      tool:'REACT, SASS',
      page:'main + sub',
      contents:`
        json파일에서 친구 목록과 대화 목록을 불러옵니다.
        <br /><br />
        입력창에 대화를 입력하면 채팅을 보낼 수 있습니다.
      `
    }
  ],
  clones:[
    {
      name:'세미네 부엌 플랫폼',
      tool: 'HTML, CSS',
      page: 'main',
      git:'',
      demo:''
    },
    {
      name:'말랑말랑 플랫폼',
      tool: 'HTML, CSS,  JS,  jQuery',
      page: 'main',
      git:'',
      demo:''
    },
    {
      name:'타이어테크',
      tool: 'HTML, CSS,  jQuery',
      page: 'main + sub*3',
      git:'',
      demo:''
    },
    {
      name:'빙그레',
      tool: 'HTML, CSS,  jQuery',
      page: 'main',
      git:'',
      demo:''
    },
    {
      name: 'MONURECO',
      tool: 'HTML, CSS',
      page: 'main',
      git:'',
      demo:''
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    default:
      return {...state}
  }
}

export default reducer;