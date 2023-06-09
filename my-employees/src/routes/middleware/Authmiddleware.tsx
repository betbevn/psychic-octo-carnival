import { Redirect, Route } from "react-router-dom";

interface AuthLayoutProps {
  component: any;
  layout: any;
  isAuthProtected: boolean;
  path?: string;
  exact?: boolean;
  key?: number;
}

const Authmiddleware = ({
  component,
  layout,
  isAuthProtected,
  path,
  exact,
  key,
  ...rest
}: AuthLayoutProps) => {
  const Layout = layout;
  const Component = component;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && !localStorage.getItem("authUser")) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default Authmiddleware;
