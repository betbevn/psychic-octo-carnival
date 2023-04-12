import { UserEntity } from "@/types/common";

export interface UsersStore {
  error: string;
  users: UserEntity[];
  userInfo: UserEntity;
}
