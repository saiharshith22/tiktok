// src/hooks/useSearchUser.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUsernameStore } from "../store/useUsernameStore";

const searchUser = async (username?: string) => {
  console.log("username", username);
  const response = await axios.get("/tiktok/uservideodetails");
  return response.data;
};

export const useSearchUser = () => {
  const { setUserProfileData } = useUsernameStore();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: searchUser,
    onSuccess: (response) => {
      console.log("Mutation Successful!", response);
      // const parsedBody = JSON.parse(data.body);
      setUserProfileData(response.body.data);
      navigate("/profile");
    },
    onError: (error) => {
      console.error("Mutation Failed!", error);
      navigate("/profile");
    },
  });
};
