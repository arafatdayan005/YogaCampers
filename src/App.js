import { Flowbite } from 'flowbite-react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Flowbite>
        <Navbar></Navbar>
        <div className='d dark:bg-teal-950'>
          <Outlet></Outlet>
        </div>        
        <Footer></Footer>
      </Flowbite>
    </>
  );
}

export default App;
