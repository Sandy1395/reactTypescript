import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import ItemList from './components/ItemList';
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
                        <Route exact path="/item/:id" component={() => <div>item route</div>}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
