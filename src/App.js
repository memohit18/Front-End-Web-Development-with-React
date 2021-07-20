import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    <div >
      {/* Start of Navbar Component */}
      <Navbar dark color = "primary">
        <div className = "container">
          <NavbarBrand href="/">Ristrorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      {/* End of Navbar Component */}

      {/* Start of Menu Component */}
      <Menu />
      {/* End of Menu Component */}

    </div>
  );
}

export default App;
 