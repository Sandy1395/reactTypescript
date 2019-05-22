import React from 'react';
import {Route, BrowserRouter, Switch, Router} from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDescription from './components/ItemDescription';
import {createStore,applyMiddleware} from 'redux';
import reducer from './Reducers/index';
import {Provider} from 'react-redux';

const store = createStore(reducer,applyMiddleware());


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                        <Route exact path="/" component={() => <ItemList />}/>
                        <Route exact path="/item/:id" component={ItemDescription}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
