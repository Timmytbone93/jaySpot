import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../Components/Header/Header';
import './CSS/AddSpot.css';


class AddSpot extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            //example data

        }
    }
    render() {
        return (
            <div className="AddSpot">

                <Header />

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


export default connect(mapStateToProps, mapDispatchToProps)(AddDealPage)