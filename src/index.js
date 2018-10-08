import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

//Moment
import moment from 'moment/min/moment-with-locales'
import Moment from 'react-moment'

//Components
import Routing from './components/Routing'

//Store
import store from './config'

//ServiceWorker
import registerServiceWorker from './registerServiceWorker';

//Assets
import './index.css';

//Seting moment
// Sets the moment instance to use.
Moment.globalMoment = moment;
 
// Set the locale for every react-moment instance to French.
Moment.globalLocale = 'pt-br';
 
// Set the output format for every react-moment instance.
Moment.globalFormat = 'DD/MM/YYYY';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root')
);
registerServiceWorker();
