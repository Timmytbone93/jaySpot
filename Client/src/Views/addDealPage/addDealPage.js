import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNav from '../../Components/TopNav/TopNav'
import AddDeal from '../../Components/Forms/AddDeal/AddDeal'
import DealsTable from '../../Components/Tables/DealsTable/DealsTable'
import './CSS/AddDeal.css';


class AddDealPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            //example data

        }
    }
    render() {
        return (
            <div className="addDeal">

                <div className="align-dashboard-dropdown">
                    <TopNav/>
                </div>

                <div className="align-dashboard-content">
                    <AddDeal/>
                    <br/>
                    <DealsTable/>
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


export default connect(mapStateToProps, mapDispatchToProps)(AddDealPage)