import App from './App';
import about from './pages/about';
import { React } from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import { IndexRoute } from 'react-router-dom';

export default (
    <Route path="/" component={App}>
        <IndexRoute path="/" component={App}>
            <IndexRoute component={App} />
            <Route path="/about" component={about} />
            <Route path="/contact" component={contact} />
        </IndexRoute>
    </Route>
)