import React from 'react';
import Home from './components/homeApp/home';
import Navigation from "./components/navigation";
import {Redirect, Route, Switch} from "react-router-dom";
import NousTrouver from "./components/findUsApp/nousTrouver";
import LaCarte from "./components/laCarteApp/laCarte";
import Page404 from "./components/page404";
import {Footer} from "./footer";

const App = () => {
    return (
        <div>
            <Navigation/>
            <React.StrictMode>
                <Switch>
                    <Route path='/nous-trouver' component={NousTrouver}/>
                    {/*region LaCarteRedirect*/}
                    {/*<Redirect from='/pizza:s?' to='/la-carte'/>*/}
                    {/*<Redirect from='/carte' to='/la-carte'/>*/}
                    {/*endregion*/}
                    <Route path='/la-carte' component={LaCarte}/>
                    <Route path='/page404' component={Page404}/>
                    {/*region homeRedirect*/}
                    {/*<Redirect from='/home' to='/bienvenus'/>*/}
                    {/*<Redirect from='/accueil' to='/bienvenus'/>*/}
                    <Redirect from='/' exact to='/bienvenus'/>
                    {/*endregion*/}
                    {/*<Route path='/bienvenu:s?' component={Home}/>*/}
                    <Route path='/bienvenus' component={Home}/>
                    <Redirect to='/page404'/>
                </Switch>
            </React.StrictMode>
            <Footer/>
        </div>
    )
        ;
};

export default App;