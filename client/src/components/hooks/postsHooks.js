import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useFetchAllPosts = () => {
  return useQuery(["posts"], async () => {
    const { data } = await axios.get("/api/posts");
    return data;
  });
};

export const useFetchSinglePost = (id) => {
  return useQuery(["posts", id], async () => {
    const { data } = await axios.get(`/api/posts/${id}`);
    return data;
  });
};

export const usePostCreate = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(
    (post) => {
      return axios.post("/api/posts/create", post);
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

export const usePostEdit = (id) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation(
    (post) => {
      return axios.put(`/api/posts/edit/${id}`, post);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        navigate("/admin");
      },
      onError: () => {},
    }
  );
};
