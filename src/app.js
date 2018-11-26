import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';

function App() {
    return (
        <BrowserRouter>
            <Fragment>
                <Route exact path="/" component={Home} />
            </Fragment>
        </BrowserRouter>
    );
}

export default hot(module)(App);
