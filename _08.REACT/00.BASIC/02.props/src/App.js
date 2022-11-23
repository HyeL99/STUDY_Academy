import './App.css'
import Hello01 from './component/Hello01.js'
import Hello02 from './component/Hello02.js'
import Wrapper from './component/Wrapper.js'

const App = () => {
  const style01 = {
    color: 'red',
    fontSize: 20
  }
  return (
    <Wrapper>
      <h3 style={style01}>안녕하세요</h3>
      <h3>안녕하세요</h3>

      {['🌙','🌕','🌠'].map(item => <h1 style={{display:'inline-block'}}>{item}</h1>)}
      <p>
        리액트 기본내용을 살짝 복습 해보았어요! <br />
        오늘도 열심히!!
      </p>
      <hr />
      <div style={{ color: 'red' }}>Hello</div>
      <Hello01 style={{ color: 'red' }} />
      <Hello01 class01='red' />
      <Hello01 color='orange' />
      <Hello01 color='green' name='회원' />
      <hr />
      <div style={{ color: 'red' }}>Hello</div>
      <Hello02 style={{ color: 'red' }} />
      <Hello02 class01='red' />
      <Hello02 color='orange' />
      <Hello02 color='green' name='회원' />
      
    </Wrapper>
  )
}

export default App;
