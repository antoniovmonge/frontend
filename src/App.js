import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Antonio edited it once again!! <code>src/App.js</code> and saved it.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't Learn React! Learn Django instead! Feature Branch :)
        </a>
      </header>
    </div>
  );
}

export default App;
