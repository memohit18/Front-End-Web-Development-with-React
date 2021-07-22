import React, { Component } from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <>
                {/* Start of Navbar Component */}
                <Navbar dark>
                    <div className = "container">
                        <NavbarBrand href="/">Ristrorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                {/* End of Navbar Component */}

                <Jumbotron>
                    <div className = "container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristrorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and craete a unique fusion experince. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
            </>
        )
    }
}

export default Header