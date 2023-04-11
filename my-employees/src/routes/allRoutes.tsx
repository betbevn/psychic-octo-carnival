import { Redirect } from "react-router-dom";
import Profile from "../pages/users/Profile";
import Dashboard from "../pages/dashboard/Dashboard";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  { path: "/dashboard", component: Dashboard },
  { path: "/projects", component: Profile },
  { path: "/profiles", component: Profile },
  { path: "/profile/add", component: Profile },
  { path: "/profile/:id", component: Profile },
  { path: "/profile/edit/:id", component: Profile },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/login", component: <div>Login</div> },
  { path: "/register", component: <div>Register</div> },
];

export { userRoutes, authRoutes };
