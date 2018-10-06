import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//Components
import Routing from './components/Routing'

//Store
import store from './config'

//ServiceWorker
import registerServiceWorker from './registerServiceWorker';

//Assets
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root')
);
registerServiceWorker();
