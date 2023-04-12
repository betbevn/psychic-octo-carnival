import { UserEntity } from "@/types/common";

export interface ProfileStore {
  error: string;
  success?: UserEntity;
}
