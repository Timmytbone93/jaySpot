import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logout from "../Logout/Logout";
import './CSS/Navski.css';


class SideNav extends Component{

    constructor(){
        super();
        this.state={

            open:false

        }
       
    }
   
    toggleNav = (e) =>{
        e.preventDefault();     
        this.setState({

            open:!this.state.open
        });
    }

    render(){

        return(
            <div className="Navski">
                    <NavLink to='/Dashboard' active="true">Home</NavLink>
                    <NavLink to='/AddSpot'>Add Spot</NavLink>
                    <Logout/>
            </div>
        );
    }
}





export default SideNav