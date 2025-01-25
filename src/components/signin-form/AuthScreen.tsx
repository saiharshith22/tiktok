import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import {
  AuthContainer,
  Card,
  GoogleButton,
  Header,
  InputContainer,
} from "./styled.components";

const AuthScreen: React.FC = () => {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse: TokenResponse) => {
      try {
        const tokenResponse = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        );
        if (tokenResponse) {
          const accessToken = codeResponse?.access_token;
          if (accessToken) {
            alert(`Login Successful! Hi ${tokenResponse?.data?.name}`);
            console.log("tokenResponse", tokenResponse);
            console.log("access token", accessToken);
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <AuthContainer>
      <Card>
        <Header>
          <AiFillTikTok size={30} />
          <div>TikTok Recovery</div>
        </Header>

        <GoogleButton onClick={() => login()}>
          <FaGoogle color="#007bff" />
          Sign in with Google
        </GoogleButton>

        <InputContainer>
          <label htmlFor="username">TikTok Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your TikTok username"
          />
          <small>This is the username linked to your TikTok account</small>
        </InputContainer>
        {/* 
        <InfoBox>
          <FaCheckCircle />
          <span>
            Your credentials are encrypted and secure. We do not store your
            Google or TikTok login details.
          </span>
        </InfoBox>

        <Footer>
          <p>
            Need help? <a href="#">Contact Support</a>
          </p>
          <p>
            By signing in, you agree to our <a href="#">Terms and Conditions</a>{" "}
            and <a href="#">Privacy Policy</a>.
          </p>
          <a href="#">Learn more about how we use your data</a>
        </Footer> */}
      </Card>
    </AuthContainer>
  );
};

export default AuthScreen;
