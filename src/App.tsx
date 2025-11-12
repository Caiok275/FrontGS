import NavBarra from './Components/NavBarra/NavBarra';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBarra />
      <Outlet />
    </div>
  );
}

export default App;