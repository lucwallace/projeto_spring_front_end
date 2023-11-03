import NavBar from '../src/components/navBar/navBar-component';
import Teste from '../src/pages/teste';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default App;
