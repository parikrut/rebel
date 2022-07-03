import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export function useRequest({ type = "POST", url }) {
  const queryClient = useQueryClient();

  const {
    mutateAsync,
    isLoading: loading,
    data,
  } = useMutation(
    `${url}-${type}`,
    async (body) => {
      var config = {
        method: type,
        url: `${url}/${body?.variables?.id ?? ""}`,
        data: body?.data,
      };

      let response, status;
      await axios(config)
        .then((res) => {
          response = res.data;
          status = res.status;
        })
        .catch((error) => {
          // console.log(error.response);
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
    return { data: data?.response, loading, forceUpdate, mutate: mutateAsync };
  }

  if (!loading && data?.response) {
    if (!data?.response?.success) {
      return {
        data: data?.response,
        loading,
        forceUpdate,
        mutate: mutateAsync,
      };
    }
  }

  return { data: data?.response, loading, forceUpdate, mutate: mutateAsync };
}
