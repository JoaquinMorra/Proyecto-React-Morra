
import './App.css';
import Cartcontent from './components/Cartcontent/Cartcontent';
import Home from './components/Home/Home';
// Importamos react rouer dom
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// Importamos nuestro data provider
import DataProvider from './components/Context/DataContext';


function App() {
  return(
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={Cartcontent} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App;
