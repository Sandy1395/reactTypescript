import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';


const App = () => {
    return (
            <div>
                    <Router>
                        <Route exact path="/" component={() => <div><h1>Root route</h1></div>}/>
                        <Route exact path="/item/:id" component={() => <div>item route</div>}/>
                    </Router>
            </div>
    );
}

export default App;
