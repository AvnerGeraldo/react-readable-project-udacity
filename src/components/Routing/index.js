import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//Component
import PrivateRoute from '../Helpers/PrivateRoute'
import Login from '../Login'
import Blog from '../Blog'

export default (props) => (
    <Switch>
        <Route 
            path='/'
            exact
            component={Login}
        />
        <PrivateRoute
            path='/blog'
            exact
            component={Blog}
        />
        <Redirect from='*' to='/' />
    </Switch>
)