import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';

// REACT is a SPA (Single Page Application)

function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet />
    </div>
  );
}

export default App;
 