import React, {useEffect, useState} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from './components/homeApp/home';
import Navigation from "./components/navigation";
import {NousTrouver} from "./components/findUsApp/nousTrouver";
import Page404 from "./components/page404";
import {MainLogoMinify} from "./components/commons/icons";
import {Products} from "./components/laCarte/products";
import { LandingPage } from './components/landing'

const App = () => {

    // const [navIsHidden, setNavIsHidden] = useState(false) // change back to true
    // useEffect(() => {
    //     if (navIsHidden) {
    //         navMobile.current.hidden = false // change back to true
    //         iconNav.current.hidden = false
    //     } else {
    //         navMobile.current.hidden = false
    //         iconNav.current.hidden = false // change back to true
    //     }
    // })
    // const iconNav = React.createRef()
    // const navMobile = React.createRef()

    // const handleShowNav = () => {
    //     navIsHidden ? setNavIsHidden(false) : setNavIsHidden(true)
    //     console.log(!navIsHidden)
    // }

    return (
        <React.StrictMode>
            {/*<Navigation navRef={navMobile} onClose={handleShowNav}/>*/}
            {/*<MainLogoMinify refLogo={iconNav} onClick={handleShowNav} beige={true}/>*/}
            <Switch>
                <Route path='/nous-trouver' component={NousTrouver}/>
                {/*region LaCarteRedirect*/}
                {/*<Redirect from='/pizza:s?' to='/la-carte'/>*/}
                {/*<Redirect from='/carte' to='/la-carte'/>*/}
                {/*endregion*/}
                <Route path='/la-carte' component={Products}/>
                <Route path='/oups' component={Page404}/>
                {/*region homeRedirect*/}
                {/*<Redirect from='/home' to='/bienvenus'/>*/}
                {/*<Redirect from='/accueil' to='/bienvenus'/>*/}
                <Redirect from='/' exact to='/bienvenus'/>
                {/*endregion*/}
                {/*<Route path='/accueil' render={() => <Home iconNavRef={iconNav} onOpenNav={handleShowNav}/>}/>*/}
                <Route path='/site-en-construction' component={LandingPage}/>
                <Redirect from='/*' to={'/site-en-construction'}/>
                <Redirect to='/oups'/>
            </Switch>
        </React.StrictMode>
    )
        ;
};

export default App;