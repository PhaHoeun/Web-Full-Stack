import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h2>Welcome To React.js</h2>
      <img src={logo}></img>
      <div className='Hello'>
        <h5>Testing</h5>
        <label>Label</label>
        <button>Button</button>
        <input />
        <br />
        <br />
        <div style={{ fontSize: 32, backgroundColor: 'Red', padding: 10 }}>Hello</div>
      </div>
    </div>
  );
}


export default App;
