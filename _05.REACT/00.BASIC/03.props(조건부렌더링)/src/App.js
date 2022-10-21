import './App.css'
import Hello from './component/Hello.js'
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
      <Hello style={{ color: 'red' }} special={true}/>
      <Hello class01='red' special={false} />
      <Hello color='orange' special={0} />
      <Hello color='green' name='회원' special />
      
    </Wrapper>
  )
}

export default App;
