import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => (
    <Route
        {...rest}
        render={props => (isLogged || localStorage.getItem('author')) ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: "/access",
                    state: {from: props.location},
                }}
            />
        )} />
)

const mapStateToProps = state => ({
    isLogged: state.login.isLogged
})

//Enable PrivateRoute to re render component
export default connect(mapStateToProps, null, null, { pure: false })(PrivateRoute)