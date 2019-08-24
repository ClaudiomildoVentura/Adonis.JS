import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageAlbums from "./components/PageAlbums"
import Album from "./components/Album"

const Routes = () => (
    <Router>
        <div className="section container">
            <Switch>
                <Route exact path="/" component={PageAlbums} />
                <Route exact path="/albums/:id" component={Album} />
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(<Routes />, document.getElementById('root'));