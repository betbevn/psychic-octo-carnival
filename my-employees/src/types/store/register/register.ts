import { UserEntity } from "@/types/common";

export interface RegisterStore {
  registrationError: null;
  message: null;
  loading: boolean;
  user?: UserEntity;
}
