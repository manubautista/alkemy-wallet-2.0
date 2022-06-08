import './App.css';
//Components
import ShowOperations from './components/ShowOperations';
import CreateOperation from './components/CreateOperation';
import EditOperation from './components/EditOperation';
import Balance from './components/Balance';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header>

        <NavBar></NavBar>
            
      </header>

      <div className="App-header">
        <Balance/>
      </div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowOperations/>}/>
          <Route path='/last' element={<ShowOperations/>}/>
          <Route path='/create' element={<CreateOperation/>}/>
          <Route path='/edit/:id' element={<EditOperation/>}/>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
