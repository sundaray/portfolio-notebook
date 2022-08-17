import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useFetchAllPosts = () => {
  return useQuery(
    ["posts"],
    async () => {
      const { data } = await axios.get("/api/posts");
      return data;
    },
    { keepPreviousData: true }
  );
};

export const usePostCreate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(
    (postData) => {
      return axios.post("/api/posts/create", postData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        navigate("/");
      },
      onError: () => {},
    }
  );
};
