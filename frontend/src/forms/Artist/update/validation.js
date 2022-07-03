import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const Validator = yupResolver(
  Yup.object().shape({
    artist: Yup.string().required("Artist Name is required"),
    rate: Yup.number().required("Rate is required"),
    streams: Yup.number().required("Streams is required"),
  })
);
