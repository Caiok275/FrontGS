import NavBarra from './Components/NavBarra/NavBarra';
import { Outlet } from "react-router-dom";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBarra />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;