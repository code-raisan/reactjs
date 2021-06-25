import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <h1>
          Hello ReactJS!
          <span>
            <img src={logo} alt="logo" className="title_logo" />
          </span>
        </h1>
      </main>
    </div>
  );
}

export default App;
