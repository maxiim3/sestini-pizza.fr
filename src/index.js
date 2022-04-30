import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes/Routes'
import './Styles/index.css'

ReactDOM.render(
   <BrowserRouter>
      <Routes />
   </BrowserRouter>,
   document.getElementById('root')
)
