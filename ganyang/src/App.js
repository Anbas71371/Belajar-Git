import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Login</h2>
        <form className="login-form">
          <input type="text" placeholder="Username" className="form-input" />
          <input type="password" placeholder="Password" className="form-input" />
          <button type="submit" className="login-button">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
