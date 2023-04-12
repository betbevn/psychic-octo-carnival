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
