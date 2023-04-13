import { UserEntity } from "@/types/common";
import { StoreState } from "@/types/index";
import { History } from "history";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllUsers } from "store/user/users/actions";
import Pagination from "../../components/Pagination";

interface TeamProps {
  history: History;
}

const Team = ({ history }: TeamProps) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ search: string }>({
    mode: "onChange",
    reValidateMode: "onChange",
    values: {
      search: "",
    },
  });

  const { users } = useSelector((state: StoreState) => ({
    users: state.users.users,
  }));

  useEffect(() => {
    dispatch(getAllUsers({ limit: 10, page: 1 }));
  }, [dispatch]);

  const onChangePage = useCallback(
    (page: number) => {
      dispatch(getAllUsers({ limit: 10, page }));
    },
    [dispatch]
  );

  const handleFilter = useCallback(
    (form: { search: string }) => {
      dispatch(getAllUsers({ limit: 10, page: 1, search: form.search.trim() }));
    },
    [dispatch]
  );

  return (
    <div className="overflow-x-auto">
      <form onSubmit={handleSubmit(handleFilter)} className="py-4 flex">
        <div className="rounded-md">
          <input
            type="text"
            className="relative block w-full rounded-md border-0 px-3 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            placeholder="Search"
            {...register("search")}
          />
        </div>
        <div className="ml-2">
          <button
            disabled={isSubmitting}
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Filter
          </button>
        </div>
      </form>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Is ambassador</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.data.length
            ? users?.data.map((item: UserEntity) => {
                return (
                  <tr key={item.id}>
                    <th>{item.id}</th>
                    <td>{item.firstName + " " + item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.isAmbassador ? "true" : "false"}</td>
                    <td>
                      <button
                        onClick={() => history.push(`/user/${item.id}`)}
                        className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <Pagination
        currentPage={users.currentPage}
        onPageSelect={onChangePage}
        total={users.count}
        itemsPerPage={10}
      />
    </div>
  );
};

export default withRouter(Team);
