import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Face_recognition from "./components/face_recognition/Face_recognition";
import pfa_train from "./components/face_recognition/pfa_train";
import Pfa_pres_capture from "./components/face_recognition/Pfa_pres_capture";
import pfa_capture from "./components/face_recognition/pfa_capture";
import pfa_auto_Mail from "./components/face_recognition/pfa_auto_Mail";
import Execute_python from "./components/face_recognition/Execute_python";
import "./App.css";
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";
//redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/face_recognition'
                component={Face_recognition}
              />
              <PrivateRoute
                exact
                path='/Execute_python'
                component={Execute_python}
              />
              <PrivateRoute exact path='/pfa_train' component={pfa_train} />
              <PrivateRoute
                exact
                path='/Pfa_pres_capture'
                component={Pfa_pres_capture}
              />
              <PrivateRoute exact path='/pfa_capture' component={pfa_capture} />
              <PrivateRoute
                exact
                path='/pfa_auto_Mail'
                component={pfa_auto_Mail}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
