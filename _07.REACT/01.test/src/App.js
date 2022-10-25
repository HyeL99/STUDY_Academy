import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리액트 기본 문서에요!!!
        </p>
        <a
          className="App-link"
          href="https://ko.reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          리액트 공식 홈으로 가볼까요?
        </a>
      </header>
    </div>
  );
}

export default App;
