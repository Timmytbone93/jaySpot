import React, { Component } from 'react'
import { connect } from 'react-redux'
import SideNav from '../../Components/SideNav/SideNav.js'
import TopNav from '../../Components/TopNav/TopNav'
import AddBar from  '../../Components/Forms/AddBar/AddBar'
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


                <div className="align-dashboard-dropdown">
                    <TopNav/>
                </div>

                <div className="align-dashboard-content">
                    <AddBar/>
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