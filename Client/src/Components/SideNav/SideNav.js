import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Logout from "../Logout/Logout";
import "./CSS/sideNav.css"


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
            <div className="align-dropdown">
                <div id="mySidenav" className={(this.state.open)?"sidenav open":"sidenav closed"}>
                    <a href="" id="menuTrigger" onClick={this.toggleNav}> &#9776;</a>
                    <p id='navHeader'>Beer Money</p>
                    <hr/>
                    <NavLink to='/Dashboard' active="true">Home</NavLink>
                    <NavLink to='/AddDeal'>Add Deal</NavLink>
                    <Logout/>
                </div>
            </div>
        );
    }
}





export default SideNav