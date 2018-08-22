import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './CSS/AddBar.css';

class AddBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barName: "",
            barOwnerID: this.props.user._id,
            barPhone: "",
            street: "",
            city: "",
            zipCode: "",
            about: ""
        }
    }

    render() {
        return (
            <div className="container">
                <div className="addBar-Welcome">
                    <label>Let's set up your bar</label>
                 </div>
            <form>
                <ul className="flex-outer">

                    <li>
                        <label htmlFor="barName">Bar Name</label>
                        <input type="text" id="barName" name="barName" value={this.state.barName} onChange={this.onChangeHandler} placeholder="Enter your bar name here"/>
                    </li>
                    <li>
                        <label htmlFor="barPhone">Phone</label>
                        <input type="tel" id="barPhone" name="barPhone" value={this.state.barPhone} onChange={this.onChangeHandler} placeholder="Enter your bar phone here"/>
                    </li>
                    <li>
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" name="street" value={this.state.street} onChange={this.onChangeHandler} placeholder="Enter your bar name here"/>
                    </li>
                    <li>
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" value={this.state.city} onChange={this.onChangeHandler} placeholder="Enter your first name here"/>
                    </li>
                    <li>
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="text" id="zipCode" name="zipCode" value={this.state.zipCode} onChange={this.onChangeHandler} placeholder="Enter your last name here"/>
                    </li>
                    <li>
                        <label htmlFor="about">About</label>
                        <textarea rows="6" id="message" name="about" value={this.state.about} onChange={this.onChangeHandler} placeholder="Tell us about your bar!"/>
                    </li>
                    <li>
                        <button type="submit" onClick={this.addBar}>Next</button>
                    </li>

                </ul>
            </form>
        </div>
        );
    }


    onChangeHandler = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
    };

    addBar = (event) => {
        event.preventDefault();
        axios.post('/api/Bar/Add', {
            "barOwnerID": this.state.barOwnerID,
            "barName": this.state.barName,
            "barPhone":this.state.barPhone,
            "street":this.state.street,
            "city":this.state.city,
            "zipCode":this.state.zipCode,
            "about":this.state.about
        }, function (response) {
            console.log(response);
        });
    };
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.isAuthenticated,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addUserInfo: (data) => dispatch({type: 'ADDUSERINFO', user: data}),
        flipAuthentication: (payload) => dispatch({type: 'FLIPAUTHENTICATION', value: payload}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBar)