import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import Loading from '../Loading/Loading';


class PrivateRoute extends Component {

    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={props => {
                    if (this.props.isAuthenticated === null) {
                        return <Loading/>
                    } else if (!this.props.isAuthenticated) {
                        return <Redirect to={{pathname: '/', state: {from: props.location}}}/>
                    } else if (this.props.isAuthenticated) {
                        return <Component {...props} />
                    }
                }

                }

            />
        )
    }

    componentDidMount() {
        if (!localStorage.getItem('x-auth-token')) {
            this.props.flipAuthentication(false);
        }
        axios.post('/api/isAuthenticated', {
            token: localStorage.getItem('x-auth-token')
        }).then(res => {
            if (res.status === 200) {
                var token = res.headers['x-auth-token'];
                this.props.addUserInfo(jwt_decode(token));
                this.props.flipAuthentication(true);
            }
        }).catch(err => {
            this.props.flipAuthentication(false);



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
        addUserInfo: (data) => dispatch({type: 'ADDUSERINFO', user: data}),
        flipAuthentication: (payload) => dispatch({type: 'FLIPAUTHENTICATION', value: payload}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);