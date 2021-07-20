import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render(){
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
        <Menu dishes = {this.state.dishes} />
        {/* End of Menu Component */}
  
      </div>
    );
  }
}

export default App;
 