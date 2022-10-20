import './App.css'
import Hello from './component/Hello.js'
import Wrapper from './component/Wrapper.js'

const App = () => {
  return (
    <Wrapper>
      <div style={{ color: 'red' }}>Hello</div>
      <Hello style={{ color: 'red' }} />
      <Hello class='red' />
      <Hello color='orange' />
      <Hello color='green' name='회원' />
    </Wrapper>
  )
}

export default App;
