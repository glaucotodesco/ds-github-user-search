import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./core/components/Header";
import Search from "./pages/Search";
import Home from "./pages/Home";

const Routes = () => (
    <BrowserRouter>
        <Header/>
         <Switch>
            <Route path="/" exact >
                <Home/>
            </Route>
            <Route path="/search" exact >
                <Search/>
            </Route>
        </Switch>
    </BrowserRouter> 
);

export default Routes;