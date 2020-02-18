import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Home';
interface Props {}
const Routes:React.SFC<Props> = () => (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage}/>
        </Switch>
        </BrowserRouter>
    );

export default Routes;
