import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
// actions
import { registerUser } from "../../store/actions";
import { withRouter } from "react-router-dom";

const validationSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required").email("Email invalid"),
    password: yup.string().required("Password is required"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match"),
  })
  .required();

interface Form {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface LoginProps {
  history: object;
}

const Signup = ({ history }: LoginProps) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const handleRegister = (form: Form) => {
    dispatch(registerUser(form, history));
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleRegister)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <input
                type="text"
                className="relative block w-full rounded-t-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="First name"
                {...register("firstName")}
              />
              <p className="text-red-500">
                <ErrorMessage errors={errors} name={"firstName"} />
              </p>

              <input
                type="text"
                className="relative block w-full border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Last name"
                {...register("lastName")}
              />
              <p className="text-red-500">
                <ErrorMessage errors={errors} name={"lastName"} />
              </p>

              <input
                type="email"
                className="relative block w-full border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email"
                {...register("email")}
              />
              <p className="text-red-500">
                <ErrorMessage errors={errors} name={"email"} />
              </p>
              <input
                type="password"
                className="relative block w-full border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-red-500">
                <ErrorMessage errors={errors} name={"password"} />
              </p>
              <input
                type="password"
                className="relative block w-full rounded-b-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password confirm"
                {...register("passwordConfirm")}
              />
              <span className="text-red-500">
                <ErrorMessage errors={errors} name={"passwordConfirm"} />
              </span>
            </div>

            <div className="mt-2">
              <a href="/login" className="text-blue-700 underline">
                Login
              </a>
            </div>

            <div className="mt-5">
              <button
                disabled={isSubmitting}
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Signup);
