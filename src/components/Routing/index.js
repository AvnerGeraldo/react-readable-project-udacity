import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//Component
import PrivateRoute from '../Helpers/PrivateRoute'
import Login from '../Login'
import Blog from '../Blog'
import CategoryPosts from '../Blog/CategoryPosts'
import PostDetail from '../PostDetail'
import Page404 from '../Page404'

export default () => (
    <Switch>
        <Route 
            path='/access'
            exact
            component={Login}
        />
        <PrivateRoute
            path='/'
            exact
            component={Blog}
        />
        <Route 
            path='/404'
            exact
            component={Page404}
        />
        <PrivateRoute
            path='/:category'
            exact
            component={CategoryPosts}
        />
        <PrivateRoute
            path='/:category/:id'
            exact
            component={PostDetail}
        />
        <Redirect from='*' to='/404' />
    </Switch>
)