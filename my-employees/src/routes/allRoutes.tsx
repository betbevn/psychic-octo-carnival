import { Redirect } from "react-router-dom";
import Profile from "../pages/users/Profile";
import Dashboard from "../pages/dashboard/Dashboard";
import Signup from "../pages/auth/Signup";
import Login from "pages/auth/Login";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  { path: "/projects", component: Profile },
  { path: "/profiles", component: Profile },
  { path: "/profile/add", component: Profile },
  { path: "/profile", component: Profile },
  { path: "/profile/edit", component: Profile },
  { path: "/dashboard", component: Dashboard },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

export { userRoutes, authRoutes };
