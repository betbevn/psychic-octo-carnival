import {
  PaginationResult,
  ParamsGetListUsers,
  UserEntity,
} from "@/types/common";
import { getAllUsers } from "api/api";
import { useQuery } from "react-query";
import * as url from "../helper/url_helper";

export const useGetListUsers = (
  params?: ParamsGetListUsers,
  onSuccess?: (users: PaginationResult<UserEntity>) => void
) => {
  const { data } = useQuery({
    queryKey: ["getListUsers", params],
    queryFn: async () => {
      const data = await getAllUsers(url.GET_ALL_USERS_AMBASSADOR, params);
      return data;
    },
    onSuccess: (res) => {
      onSuccess?.(res);
    },
  });
  return {
    users: data,
  };
};
