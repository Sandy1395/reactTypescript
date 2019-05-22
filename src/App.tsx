import React, {FC, Suspense, lazy} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import { ItemContainer } from "./components/containers/ItemContainer";

const ItemListRoute = lazy(() => import('./components/ItemList'));
const ItemDescriptionRoute = lazy(() => import('./components/ItemDescription'));


const LoaderExampleLoader = () => (
    <Segment>
        <Dimmer active>
            <Loader />
        </Dimmer>
        <Image src='/images/wireframe/short-paragraph.png' />
    </Segment>
);

const App: FC = () => {
    return (
        <Suspense fallback={<LoaderExampleLoader/>}>
            <div>
                <ItemContainer>
                    <Router>
                        <Route exact path="/" component={ItemListRoute}/>
                        <Route exact path="/item/:id" component={ItemDescriptionRoute}/>
                    </Router>
                </ItemContainer>
            </div>
        </Suspense>
    );
}

export default App;
