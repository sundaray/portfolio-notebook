import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchAllPosts = () => {
  const response = useQuery(["posts"], async () => {
    const { data } = await axios.get("/api/posts");
    return data;
  });

  return response;
};
