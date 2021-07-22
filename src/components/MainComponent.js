
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'
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
        <Header/>
        
        {/* Start of Menu Component */}
        <Menu dishes = {this.state.dishes}
             onClick={(dishId)=> this.onDishSelect(dishId)} />
        <DishDetail 
            dish={this.state.dishes.filter((dish) => dish.id ===  this.state.selectedDish )[0]}/>
        {/* End of Menu Component */}

        <Footer/>
  
      </div>
    );
  }
}

export default Main;
 