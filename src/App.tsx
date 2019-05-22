import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ItemList from './components/ItemList';
import {createStore,applyMiddleware} from 'redux';
import reducer from './Reducers/index';
import {Provider} from 'react-redux';

const store = createStore(reducer,applyMiddleware());


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                        <Route exact path="/" component={() => <ItemList />}/>
                        <Route exact path="/item/:id" component={() => <div>item route</div>}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
