export interface UserForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface UserEntity {
  firstName: string;
  lastName: string;
  id: string;
  isAmbassador: boolean;
  email: string;
}

export interface LoginPayload {
  password: string;
  email: string;
}
export interface UpdateProfilePayload {
  firstName: string;
  lastName: string;
}

export interface PaginationResult<T> {
  data: T[];
  count: number;
  currentPage: number;
  totalPage: number;
  cursor?: string;
}
