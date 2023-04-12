import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

// actions
import { loginUser, logoutUser } from "../../store/actions";

const validationSchema = yup
  .object()
  .shape({
    email: yup.string().required("Email is required").email("Email invalid"),
    password: yup.string().required("Password is required"),
  })
  .required();

interface Form {
  email: string;
  password: string;
}

interface LoginProps {
  history: object;
}

const Login = ({ history }: LoginProps) => {
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

  const handleLogin = useCallback(
    (form: Form) => {
      dispatch(loginUser(form, history));
    },
    [dispatch, history]
  );

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      dispatch(logoutUser(history));
    }
  }, [dispatch, history]);

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
              Go to the moon
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="-space-y-px rounded-md shadow-sm">
              <input
                type="email"
                className="relative block w-full rounded-t-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
                {...register("email")}
              />
              <input
                type="password"
                className="relative block w-full rounded-b-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
