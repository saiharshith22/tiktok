import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTierStore } from "../store/useTierDetailsStore";

const fetchTierDetails = async () => {
  const response = await axios.get(`${import.meta.env.VITE_DOMAIN}/v1/tiers`, {
    headers: {
      "x-api-key": `${import.meta.env.VITE_X_API_KEY}`,
    },
  });
  return response.data;
};

export const useFetchTierDetails = () => {
  const navigate = useNavigate();
  const { setTiers } = useTierStore();
  return useMutation({
    mutationFn: fetchTierDetails,
    onSuccess: (response) => {
      console.log("Mutation Successful!", response);
      setTiers(response.body.data.tiers);
      navigate("/pricing");
    },
    onError: (error) => {
      console.error("Mutation Failed!", error);
      navigate("/pricing");
    },
  });
};
