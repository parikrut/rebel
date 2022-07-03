import { useForm } from "react-hook-form";
import { Button } from "../../../components/atoms/Button";
import { Input } from "../../../components/atoms/Input";
import { useRequest } from "../../../hooks/useRequest";
import { Validator } from "./validation";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";

export const UpdateArtist = () => {
  const formOptions = {
    resolver: Validator,
  };
  const { handleSubmit, control, setValue } = useForm(formOptions);
  const { mutate: UpdateMutate } = useRequest({
    type: "PUT",
    url: `artist`,
  });
  const history = useHistory();
  const params = useParams();

  const { data } = useFetch({
    type: "GET",
    url: `artist/${params?.id}`,
  });

  useEffect(() => {
    const artist = data?.Artist;
    setValue("artist", artist?.artist);
    setValue("rate", artist?.rate);
    setValue("streams", artist?.streams);
  }, [data]);

  const submit = async (data) => {
    const Query = await UpdateMutate({
      variables: { id: params?.id },
      data: data,
    });
    if (Query?.response?.success) {
      history.push("/");
    }
  };

  const SaveButton = () => (
    <div className="flex flex-row justify-center">
      <Button color="primary" type="submit">
        Update
      </Button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col md:flex-row gap-4 ">
        <Input
          label={"Artist Name"}
          registerTitle={"artist"}
          control={control}
          placeholder={"John Doe..."}
          type={"text"}
        />
        <Input
          label={"Artist Rate"}
          registerTitle={"rate"}
          control={control}
          placeholder={"0.004"}
          type={"number"}
          step="0.0001"
        />
        <Input
          label={"Artist streams"}
          registerTitle={"streams"}
          control={control}
          placeholder={"11111"}
          type={"number"}
        />
      </div>

      <SaveButton />
    </form>
  );
};
