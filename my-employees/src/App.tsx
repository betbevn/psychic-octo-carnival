import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import { authRoutes, userRoutes } from "./routes/allRoutes";
import NonAuthLayout from "./components/NonAuthLayout";
import Layout from "./components/Layout";

function App() {
  return (
    <React.Fragment>
      <Router forceRefresh>
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
