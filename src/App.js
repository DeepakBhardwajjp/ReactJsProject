import logo from './logo.svg';
import './App.css';

function App() {
  const HelloReact=(name)=>{
    alert("Hello ReactJS inside function" + name);
  }

  return (
    <div className="App">
      <input type="button" value="Hello React !" onClick={()=>HelloReact("Deepak")} />
    </div>
  );
}

export default App;
