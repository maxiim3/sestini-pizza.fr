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

const App = ({ location }) => {
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

   const getHash = () => {
      return '' || window.location.hash
   }
   const [hash, setHash] = useState(getHash())
   useEffect(() => {
      if (hash === '#pizza-du-mois') {
         handleScrollToPDM(350)
      }
      window.addEventListener('hashchange', () => setHash(getHash()))
      return () => window.removeEventListener('hashchange', () => setHash(getHash()))
   })

   const iconNav = React.createRef()
   const navMobile = React.createRef()
   const pizzaDuMois = React.createRef()

   const handleScrollToPDM = time => {
      setTimeout(() => {
         pizzaDuMois.current.scrollIntoView({ behavior: 'smooth' })
      }, time)
      clearTimeout()
   }

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
               render={() => (
                  <Home
                     iconNavRef={iconNav}
                     onOpenNav={handleShowNav}
                     refPDM={pizzaDuMois}
                     handleScroll={handleScrollToPDM}
                  />
               )}
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
