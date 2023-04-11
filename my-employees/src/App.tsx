import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import { authRoutes, userRoutes } from "./routes/allRoutes";
import NonAuthLayout from "./components/NonAuthLayout";
import Layout from "./components/Layout";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {/* {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))} */}

          {userRoutes.map((route: any, idx: number) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              // isAuthProtected={true}
              isAuthProtected={false}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
