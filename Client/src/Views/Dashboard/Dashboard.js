import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../Components/Header/Header';
import './CSS/Dashboard.css'

class Dashboard extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="dashboard">
                <Header />

                <div className="align-dashboard-dropdown">
                    
                </div>
            </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)