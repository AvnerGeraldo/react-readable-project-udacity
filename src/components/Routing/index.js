import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//Component
import PrivateRoute from '../Helpers/PrivateRoute'
import Login from '../Login'
import Blog from '../Blog'
import CategoryPosts from '../Blog/CategoryPosts'

export default (props) => (
    <Switch>
        <Route 
            path='/'
            exact
            component={Login}
        />
        <PrivateRoute
            path='/blog/posts'
            exact
            component={Blog}
        />
        <PrivateRoute
            path='/blog/posts/category/:category'
            exact
            component={CategoryPosts}
        />
        <Redirect from='*' to='/' />
    </Switch>
)