import { UserForm } from "@/types/common";
import { StoreState } from "@/types/index";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import clx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { editProfile, getProfile } from "store/actions";
import * as yup from "yup";

const validationSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
  })
  .required();

const Profile = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { success } = useSelector((state: StoreState) => ({
    success: state.profile.success,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Pick<UserForm, "firstName" | "lastName">>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
    values: {
      firstName: success.firstName,
      lastName: success.lastName,
    },
  });

  const handleUpdate = useCallback(
    (form: Pick<UserForm, "firstName" | "lastName">) => {
      setIsModalOpen(false);
      dispatch(editProfile(form));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className={clx("modal", { "modal-open": isModalOpen })}>
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => setIsModalOpen(false)}
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update user</h3>
          <form onSubmit={handleSubmit(handleUpdate)} className="py-4">
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
                className="relative block w-full rounded-b-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Last name"
                {...register("lastName")}
              />
              <p className="text-red-500">
                <ErrorMessage errors={errors} name={"lastName"} />
              </p>
            </div>

            <div className="mt-5">
              <button
                disabled={isSubmitting}
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <div>
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Profile Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">First name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {success?.firstName}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Last name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {success?.lastName}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {success?.email}
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Identify</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {success?.id}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Is ambassador?
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {success?.isAmbassador ? "true" : "false"}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default withRouter(Profile);
