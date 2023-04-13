import { PaginationResult, UserEntity } from "@/types/common";

export interface UsersStore {
  error: string;
  users: PaginationResult<UserEntity>;
  userInfo?: UserEntity;
}
