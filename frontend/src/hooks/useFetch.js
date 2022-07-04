import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import server from "../config/server";

export function useFetch({ type = "GET", url }) {
  const queryClient = useQueryClient();
  const { isLoading: loading, data } = useQuery(
    `${url}-${type}`,
    async () => {
      var config = {
        method: type,
        url: `${server}/${url}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };

      let response, status;
      await axios(config)
        .then((res) => {
          response = res.data;
          status = res.status;
        })
        .catch((error) => {
          if (error.response) {
            response = error.response.data;
            status = error.response.status;
          } else {
            response = {
              success: false,
              error: "Network Error!!",
            };
          }
        });
      return { response, status };
    },
    {
      retry: 0,
    }
  );

  const forceUpdate = () => {
    queryClient.invalidateQueries(`${url}-${type}`);
  };

  if (data?.status == 401) {
    return { data: data?.response, loading, forceUpdate };
  }

  if (!loading && data?.response) {
    if (!data?.response?.success) {
      // dispatch(throwError(data?.response?.error));
      return {
        data: data?.response,
        loading,
        forceUpdate,
      };
    }
  }

  return { data: data?.response, loading, forceUpdate };
}
