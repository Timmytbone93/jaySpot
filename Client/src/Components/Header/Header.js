import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from '../../Components/Title/Title'
import Navski from '../../Components/Navski/Navski'
import './CSS/Header.css';
class Header extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {


        }
    }

    render(){
        //
       
        //var returnDiv;
        //(this.props.isAuthenticated)?returnDiv= (<div className='Header'><p id='jaySpot'>jaySpot</p><Navski /></div>):returnDiv= (<div className='Header'><p id='jaySpot'>jaySpot</p></div>);
            
        //return returnDiv;
        return(

          <div className='Header'><p id='jaySpot'>jaySpot</p><Navski /></div>

        );
    
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.isAuthenticated,
      user: state.user
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addUserInfo: (data) => dispatch({ type: 'ADDUSERINFO', user: data }),
      flipAuthentication: (payload) => dispatch({ type: 'FLIPAUTHENTICATION', value: payload }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header)