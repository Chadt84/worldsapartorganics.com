import React from 'react';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import Helmet from "react-helmet";
import './App.scss';
import {Header, Footer} from './components';
import {routes} from "./pages";

function App() {
    return (
        <div className="page container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Worlds Apart</title>
                <link href="../../css/bootstrap.min.css" rel="stylesheet"/>
                <link href="../../css/bootstrap-theme.min.css" rel="stylesheet"/>
                <link href="../../css/animate.css" rel="stylesheet"/>
                <link href="../../css/magnific.css" rel="stylesheet"/>
                <link href="../../css/imagehover.min.css" rel="stylesheet"/>
                <link href="../../css/hamburgers.min.css" rel="stylesheet"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
                <link rel="stylesheet/less" type="text/css" href="../../css/main.less"/>
                <script src="../../js/less.min.js"/>
            </Helmet>
            <Router>
                <Header/>
                <Switch>
                    {
                        routes.map((route, i) =>
                            <Route key={i} {...route}/>
                        )
                    }
                </Switch>
            </Router>
            <Footer/>
            <script src="../../js/jquery.min.js"/>
            <script src="../../js/ScrollMagic.min.js"/>
            <script src="../../js/plugins/animation.gsap.min.js"/>
            <script src="../../js/plugins/animation.velocity.min.js"/>
            <script src="../../js/plugins/debug.addIndicators.min.js"/>
            <script src="../../js/plugins/jquery.ScrollMagic.min.js"/>
            <script src="../../js/parallax.min.js"/>
        </div>
    );
}

export default App;
