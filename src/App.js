import './App.css';
import { Outlet } from "react-router";

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Outlet />
    </div>
  );
}

export default App;
