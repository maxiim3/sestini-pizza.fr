import {Redirect, Route, Switch} from "react-router-dom";
import React from 'react'

const App = () => {

    return (
        <React.StrictMode>
            <Switch>
                <Route path='/bienvenus'>
                    <h1>👋 Hello</h1>
                </Route>
                <Redirect from ='/*' to={'/bienvenus'}/>
            </Switch>
        </React.StrictMode>
    )
        ;
};

export default App;