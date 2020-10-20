import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth/auth";

import Login from "./pages/login"
import Register from "./pages/register";
import Home from "./pages/home"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={() => <Login/>} />
      <Route exact path="/" component={() => <Login/>} />
      <Route exact path="/register" component={() => <Register/>} />
      <PrivateRoute exact path="/home" component={() => <Home/>}/>
      <PrivateRoute exact path="/home/:jvb" component={() => <Home/>}/>
      <Route path="/*" component={() => <Redirect to path='/'>{alert('Page Not Found')}</Redirect>}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;