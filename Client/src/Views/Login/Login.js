import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import  jwt_decode  from 'jwt-decode';
import axios from 'axios';
import config from '../../Config/config.json';
import './CSS/Login.css';
import Header from '../../Components/Header/Header';



class Login extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/Dashboard' />
        }
        return (
            <div className="Login">
            <Header />
              <GoogleLogin
                className='google-button'
                clientId={config.googleApi.client_id}
                buttonText="Login"
                prompt='consent'
                accessType= 'offline'
                responseType='code'
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                 />

            </div>
        );
    }

    responseGoogle = (response) => {
        if(!response.code){
            return this.props.flipAuthentication(false);
        }
        axios.post('/api/auth/google', {
            code: response.code
        }).then(result => {
            const token = result.headers['x-auth-token'];
            localStorage.setItem('x-auth-token', token);
            this.props.addUserInfo(jwt_decode(token));
            this.props.flipAuthentication(true);

        });
    }

    componentDidMount() {
        axios.post('/api/isAuthenticated',{
            token:localStorage.getItem('x-auth-token')
        }).then(res => {
            if(res.status === 200)
            {
                var token = res.headers['x-auth-token'];
                this.props.addUserInfo(jwt_decode(token));
                this.props.flipAuthentication(true);
            }else{
                this.props.flipAuthentication(false);
            }
        });
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


export default connect(mapStateToProps, mapDispatchToProps)(Login)