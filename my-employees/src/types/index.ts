import { LoginStore } from "./store/login/login";
import { ProfileStore } from "./store/profile/profile";
import { RegisterStore } from "./store/register/register";
import { UsersStore } from "./store/users/users";

export interface StoreState {
  login: LoginStore;
  profile: ProfileStore;
  register: RegisterStore;
  users: UsersStore;
}
