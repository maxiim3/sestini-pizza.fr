import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from './components/homeApp/home'
import { Navbar } from './components/navbar'
import Navigation from './components/navigation'
import { NousTrouver } from './components/findUsApp/nousTrouver'
import Page404 from './components/page404'
import { MainLogoMinify } from './components/commons/icons'
import { Products } from './components/laCarte/products'
import 'animate.css'

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

   const [url, setUrl] = useState(window.location.pathname)
   useEffect(() => {
      setUrl(window.location.pathname)
   })

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

   const handleNavToHome = ref => {
      if (url === '/accueil') executeScroll(ref)
   }

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
         <Navigation navRef={navMobile} onClose={handleShowNav} />
         <MainLogoMinify refLogo={iconNav} onClick={handleShowNav} beige={true} />
         <Navbar handleScroll={handleNavToHome} scrollToRef={pizzaDuMois} />
         <Switch>
            {/*<Route path="/nous-trouver" component={NousTrouver} />*/}
            <Route
               path="/nous-trouver"
               render={() => <NousTrouver handleScroll={executeScroll} refPDM={pizzaDuMois} />}
            />
            <Route path="/la-carte" component={Products} />
            <Route path="/oups" component={Page404} />
            <Redirect from="/home" to="/accueil" />
            <Redirect from="/" exact to="/accueil" />
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
            <Redirect to="/oups" />
         </Switch>
      </React.StrictMode>
   )
}

export default App
