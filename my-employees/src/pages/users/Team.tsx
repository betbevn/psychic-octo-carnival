import { StoreState } from "@/types/index";
import { History } from "history";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllUsers } from "store/user/users/actions";

interface TeamProps {
  history: History;
}

const Team = ({ history }: TeamProps) => {
  const dispatch = useDispatch();

  const { users } = useSelector((state: StoreState) => ({
    users: state.users.users,
  }));

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="overflow-x-auto">
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
          {users.length
            ? users.map((item: any) => {
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
    </div>
  );
};

export default withRouter(Team);
