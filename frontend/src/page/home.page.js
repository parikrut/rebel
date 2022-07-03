import { Spinner } from "../components/atoms/Spinner";
import { Artist } from "../components/organisms/Artist";
import { useFetch } from "../hooks/useFetch";
import { useRequest } from "../hooks/useRequest";

const HomePage = () => {
  const { data, loading, forceUpdate } = useFetch({
    type: "GET",
    url: "artist",
  });

  const { mutate: DeleteMutate } = useRequest({
    type: "DELETE",
    url: `artist`,
  });

  const { mutate: UpdateMutate } = useRequest({
    type: "PUT",
    url: `artist`,
  });

  const Delete = async (id) => {
    const Query = await DeleteMutate({
      variables: { id },
    });

    if (Query?.response?.success) {
      forceUpdate();
    }
  };

  const Update = async ({ id, data }) => {
    const Query = await UpdateMutate({
      variables: { id },
      data: data,
    });

    if (Query?.response?.success) {
      forceUpdate();
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return <Artist artist={data?.Artist} Delete={Delete} Update={Update} />;
};

export default HomePage;
