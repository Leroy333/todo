import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container border border-primary rounded mt-5"
    style={{
      background: `url(https://i.pinimg.com/originals/e3/33/61/e3336101db5ae5745390d0e2993c91ee.jpg)`,
      backgroundSize: 'cover'
    }}>
        <Todo />
    </div>
  );
}

export default App;
