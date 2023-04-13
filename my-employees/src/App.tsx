import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import NonAuthLayout from "./components/NonAuthLayout";
import { authRoutes, userRoutes } from "./routes/allRoutes";
import Authmiddleware from "./routes/middleware/Authmiddleware";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}

          {userRoutes.map((route: any, idx: number) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
