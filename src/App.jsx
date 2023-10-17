import './App.css';
import { BrowserRouter } from "react-router-dom"
import AllNavigations from './components/AllNavigations';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex text-black  bg-slate-100'>
          <Sidebar />
          <AllNavigations />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
