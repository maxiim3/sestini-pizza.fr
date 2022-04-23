import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './components/homeApp/home'
import { Navbar } from './components/navbar'
import Navigation from './components/navigation'
import { NousTrouver } from './components/findUsApp/nousTrouver'
import Page404 from './components/page404'
import { MainLogoMinify } from './components/commons/icons'
import { Products } from './components/laCarte/products'
import { LandingPage } from './components/landing'

const App = () => {
   const [navIsHidden, setNavIsHidden] = useState(false)
   useEffect(() => {
      if (navIsHidden) {
         navMobile.current.hidden = false
         iconNav.current.hidden = true
      } else {
         navMobile.current.hidden = true
         iconNav.current.hidden = false
      }
   })
   const iconNav = React.createRef()
   const navMobile = React.createRef()

   const handleShowNav = () => {
      navIsHidden ? setNavIsHidden(false) : setNavIsHidden(true)
   }

   return (
      <React.StrictMode>
         <Navigation navRef={navMobile} onClose={handleShowNav} />
         <Navbar />
         <MainLogoMinify refLogo={iconNav} onClick={handleShowNav} beige={true} />
         <Switch>
            <Route path="/nous-trouver" component={NousTrouver} />
            <Route path="/la-carte" component={Products} />
            <Route path="/oups" component={Page404} />
            {/*region homeRedirect*/}
            <Redirect from="/home" to="/accueil" />
            <Redirect from="/" exact to="/accueil" />
            {/*endregion*/}
            <Route
               path="/accueil"
               render={() => <Home iconNavRef={iconNav} onOpenNav={handleShowNav} />}
            />
            {/*region LandingRouter*/}
            {/*<Route path='/' component={LandingPage}/>*/}
            {/*<Redirect from="*" to={'/'} />*/}
            {/*endregion*/}
            {/*<Redirect to="/oups" />*/}
         </Switch>
      </React.StrictMode>
   )
}

export default App
