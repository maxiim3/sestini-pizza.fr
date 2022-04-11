import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from './components/homeApp/home';
import Navigation from "./components/navigation";
import {NousTrouver} from "./components/findUsApp/nousTrouver";
import Page404 from "./components/page404";
import {MainLogoMinify} from "./components/commons/icons";
import {Products} from "./components/laCarte/products";

const App = () => {

    const [navIsHidden, setNavIsHidden] = useState(true)
    useEffect(() => {
        if (navIsHidden) {
            navMobile.current.hidden = true
            iconNav.current.hidden = false
        } else {
            navMobile.current.hidden = false
            iconNav.current.hidden = true
        }
    })
    const iconNav = React.createRef()
    const navMobile = React.createRef()

    const handleShowNav = () => {
        navIsHidden ? setNavIsHidden(false) : setNavIsHidden(true)
        console.log(!navIsHidden)
    }

    return (
        <React.StrictMode>
            <Navigation navRef={navMobile} onClose={handleShowNav}/>
            <MainLogoMinify refLogo={iconNav} onClick={handleShowNav} beige={true}/>
            <Switch>
                <Route path='/nous-trouver' component={NousTrouver}/>
                {/*region LaCarteRedirect*/}
                {/*<Redirect from='/pizza:s?' to='/la-carte'/>*/}
                {/*<Redirect from='/carte' to='/la-carte'/>*/}
                {/*endregion*/}
                <Route path='/la-carte' component={Products}/>
                <Route path='/page404' component={Page404}/>
                {/*region homeRedirect*/}
                {/*<Redirect from='/home' to='/bienvenus'/>*/}
                {/*<Redirect from='/accueil' to='/bienvenus'/>*/}
                <Redirect from='/' exact to='/bienvenus'/>
                {/*endregion*/}
                {/*<Route path='/bienvenu:s?' component={Home}/>*/}
                <Route path='/bienvenus' render={() => <Home iconNavRef={iconNav} onOpenNav={handleShowNav}/>}/>
                <Redirect to='/page404'/>
            </Switch>
        </React.StrictMode>
    )
        ;
};

export default App;