import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemList/ItemListConatiner';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return(
    <div className='App'>
      <NavbarComponent/>
      <ItemListContainer saludo= 'Hola, bienvenido Tutor/a a mi proyecto de React.'/>
    </div>
    
  )
}

export default App;
