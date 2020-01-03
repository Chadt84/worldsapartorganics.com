import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Helmet from "react-helmet";
import './App.scss';
import {Header, Footer} from './components';
import {routes} from "./pages";
import AppIcon from './assets/img/Worlds apart organics.png';

function App() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content=""/>
                <meta name="author" content="Alejandro Chaves"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>Worlds apart</title>
                <link rel="icon" href={AppIcon} type="image/x-icon"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
            </Helmet>
            <div className="container page" id="main-content">
                <Router>
                    <Header/>
                    <Switch>{routes.map((route, i) => <Route key={i} {...route}/>)}</Switch>
                </Router>
            </div>
            <Footer/>
        </>
    );
}

export default App;
