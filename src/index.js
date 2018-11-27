import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import TodoEditPage from './components/TodoEditPage';
import todoApp from './reducers';

import './index.css';

//import * as serviceWorker from './serviceWorker';

const store = createStore(todoApp);

render(
    <Provider store={ store }>
        <Router>
            <div>
                <Route exact path='/' component={ HomePage } />
                <Route path='/todo/:id' component={ TodoEditPage } />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
