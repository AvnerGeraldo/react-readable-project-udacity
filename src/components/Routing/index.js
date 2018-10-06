import React from 'react'
import { Route } from 'react-router-dom'

//Component
import Login from '../Login'
import Blog from '../Blog'

const App = () => (
    <div>
        <Route 
            path='/'
            exact
            component={Login}
        />
        <Route
            path='/blog'
            exact
            component={Blog}
        />
    </div>
)

export default App