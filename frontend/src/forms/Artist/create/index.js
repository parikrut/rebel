import { useForm } from "react-hook-form";
import { Button } from "../../../components/atoms/Button";
import { Input } from "../../../components/atoms/Input";
import { useRequest } from "../../../hooks/useRequest";
import { Validator } from "./validation";
import { useHistory } from "react-router-dom";

export const CreateArtist = () => {
  const formOptions = {
    resolver: Validator,
  };
  const { handleSubmit, control } = useForm(formOptions);
  const { mutate: CreateMutate } = useRequest({
    type: "POST",
    url: `artist`,
  });
  const history = useHistory();
  const submit = async (data) => {
    const Query = await CreateMutate({
      variables: {},
      data: data,
    });
    if (Query?.response?.success) {
      history.push("/");
    }
  };

  const SaveButton = () => (
    <div className="flex flex-row justify-center">
      <Button color="primary" type="submit">
        Save
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
