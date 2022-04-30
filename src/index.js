<<<<<<< HEAD
import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

ReactDOM.render(
   <BrowserRouter>
      <App />
=======
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes/Routes'
import './Styles/index.css'

ReactDOM.render(
   <BrowserRouter>
      <Routes />
>>>>>>> resetWebPack
   </BrowserRouter>,
   document.getElementById('root')
)
