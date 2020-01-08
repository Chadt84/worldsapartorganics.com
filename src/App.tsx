import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Helmet from "react-helmet";
import * as contentful from 'contentful';
import './App.scss';
import {Header, Footer} from './components';
import {routes} from "./pages";
import {ContentApiContext} from "./api.context";
import AppIcon from './assets/img/Worlds apart organics.png';


function App() {
    const contentfulClient = contentful.createClient({
        space: "1zu4vi5fst65",
        accessToken: "TnQpurv1MCI2-pQHaoF4t575B1vQTeXn5QkTRXPpSp8"
    });

    // @ts-ignore
    return (
        <ContentApiContext.Provider value={React.createContext(contentfulClient)}>
            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content=""/>
                <meta name="author" content="Alejandro Chaves"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="theme-color" content="#ffffff"/>
                <title>Worlds apart</title>
                <link rel="icon" href={AppIcon} type="image/x-icon"/>
            </Helmet>
            <div className="container page" id="main-content">
                <Router basename="/">
                    <Header/>
                    <Switch>{routes.map((route: any, i: number) => <Route key={i} {...route}/>)}</Switch>
                </Router>
            </div>
            <Footer/>
        </ContentApiContext.Provider>
    );
}

export default App;
