import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react/cjs/react.production.min';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
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
        <Menu dishes = {this.state.dishes}
             onClick={(dishId)=> this.onDishSelect(dishId)} />
        <DishDetail 
            dish={this.state.dishes.filter((dish) => dish.id == this.state.selectedDish )[0]}/>
        {/* End of Menu Component */}
  
      </div>
    );
  }
}

export default Main;
 