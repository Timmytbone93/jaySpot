import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


class Logout extends Component {

    render() {
        return(
            <NavLink id="logout" to='/' onClick={this.logout}>Logout</NavLink>
        )

    }


    logout = () =>{
        localStorage.removeItem('x-auth-token');
        this.props.flipAuthentication(false);
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


export default connect(mapStateToProps, mapDispatchToProps)(Logout)