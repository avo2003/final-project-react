import React from 'react';
import {BrowserRouter,Switch,Route}from 'react-router-dom'
import Hom from '../pages/Hom';
import Instagram from '../pages/instagram';

import MyPage from '../pages/MyPage';
import NotFound from '../pages/NotFound';
import Navigation from '../components/Navigation';

import Header from '../components/Hearder';

export default function AppRouter() {
    return(
        <BrowserRouter>
        <Navigation/>
        <Header/>
        <Switch>
                <Route exact path='/' component={Hom}/>
            
           
                <Route path='/instagram/:id' component={Instagram} />
                <Route path='/MyPage' component={MyPage}/>
                <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    );
}
