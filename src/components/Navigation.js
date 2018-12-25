import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navgination extends Component{
    render(){
        return(
            <div class='site-navigation'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        );
    }
}
export default Navgination;