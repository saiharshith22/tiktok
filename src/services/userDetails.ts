// src/hooks/useSearchUser.ts
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const searchUser = async (username?: string) => {
  console.log("username", username);
  const response = await axios.get("/tiktok/uservideodetails");
  return response.data;
};

export const useSearchUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: searchUser,
    onSuccess: (data) => {
      console.log("Mutation Successful!", data);
      // setUserProfileData(data);
      navigate("/profile");
    },
    onError: (error) => {
      console.error("Mutation Failed!", error);
      navigate("/profile");
    },
  });
};
