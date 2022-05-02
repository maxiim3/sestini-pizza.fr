import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../Pages/accueil/home'
import { Navbar } from './navigation/navbar'
import Navigation from './navigation/navigation'
import { NousTrouver } from '../Pages/nous-trouver/nousTrouver'
import Page404 from '../Pages/page404'
import { MainLogoMinify } from '../Components/icons'
import { Products } from '../Pages/la-carte/products'
import '../../node_modules/animate.css/animate.css'

const Routes = () => {
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

   const [url, setUrl] = useState(window.location.pathname)
   useEffect(() => {
      setUrl(window.location.pathname)
   })
   //TODO FIX the Gap issue due to  < 14 Safari version
   // => Do not support Flex-Gap, Use

   // const getHash = () => {
   //    return '' || window.location.hash
   // }
   // const [hash, setHash] = useState(getHash())
   // useEffect(() => {
   //    if (hash === '#pizza-du-mois') {
   //       executeScroll(350)
   //    }
   //    window.addEventListener('hashchange', () => setHash(getHash()))
   //    return () => window.removeEventListener('hashchange', () => setHash(getHash()))
   // }, [hash])

   const iconNav = React.createRef()
   const navMobile = React.createRef()
   const pizzaDuMois = React.createRef()
   const top = React.createRef()
   const about = React.createRef()

   const executeScroll = ref => {
      setTimeout(() => {
         ref.current.scrollIntoView({ behavior: 'smooth' })
      }, 350)
      clearTimeout()
   }

   const handleShowNav = () => {
      navIsHidden ? setNavIsHidden(false) : setNavIsHidden(true)
   }

   return (
      <React.StrictMode>
         <Navigation
            navRef={navMobile}
            onClose={handleShowNav}
         />
         <MainLogoMinify
            refLogo={iconNav}
            onClick={handleShowNav}
            beige={true}
         />
         <Navbar />
         <Switch>
            {/*<Route path="/nous-trouver" component={NousTrouver} />*/}
            <Route
               path="/nous-trouver"
               component={NousTrouver}
            />
            <Route
               path="/la-carte"
               component={Products}
            />
            <Route
               path="/oups"
               component={Page404}
            />
            <Redirect
               from="/home"
               to="/accueil"
            />
            <Redirect
               from="/"
               exact
               to="/accueil"
            />
            <Route
               path="/accueil"
               exact
               render={() => (
                  <Home
                     handleScroll={executeScroll}
                     refPDM={pizzaDuMois}
                     refTop={top}
                     refAbout={about}
                  />
               )}
            />
            {/*region LandingRouter*/}
            {/*<Route path='/' component={LandingPage}/>*/}
            {/*<Redirect from="*" to={'/'} />*/}
            {/*endregion*/}
            <Redirect
               from="/*"
               to="/oups"
            />
         </Switch>
      </React.StrictMode>
   )
}

export default Routes
