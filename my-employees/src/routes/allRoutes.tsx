import Login from "pages/auth/Login";
import Signup from "pages/auth/Signup";
import Dashboard from "pages/dashboard/Dashboard";
import Profile from "pages/users/Profile";
import Team from "pages/users/Team";
import UserInfo from "pages/users/UserInfo";
import { Redirect } from "react-router-dom";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  // { path: "/projects", component: Profile },
  // { path: "/profiles", component: Profile },
  // { path: "/profile/add", component: Profile },
  // { path: "/profile/edit", component: Profile },
  { path: "/dashboard", component: Dashboard },
  { path: "/team", component: Team },
  { path: "/profile", component: Profile },
  { path: "/user/:id", component: UserInfo },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

export { userRoutes, authRoutes };
