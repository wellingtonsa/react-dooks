import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Homepage from './pages/Home';
import useScroll from './pages/useScroll';
import useWindowSize from './pages/useWindowSize';

interface Props {}
const Routes:React.SFC<Props> = () => (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/useScroll" component={useScroll}/>
            <Route exact path="/useWindowSize" component={useWindowSize}/>
        </Switch>
        </BrowserRouter>
    );

export default Routes;
