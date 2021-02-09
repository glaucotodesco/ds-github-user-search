import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./core/components/Header";
import Home from "./pages/Home";

const Routes = () => (
    <BrowserRouter>
        <Header/>
         <Switch>
            <Route path="/" exact >
                <Home/>
            </Route>
        </Switch>
    </BrowserRouter> 
);

export default Routes;