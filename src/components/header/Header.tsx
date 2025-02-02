import { useEffect, useState } from "react";
import { LogoText, NavHeader, StyledButton } from "./styled.components";
import { AuthUser, getCurrentUser, signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const headerHeight = document.getElementById("header")?.offsetHeight ?? 0;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, []);

  const [user, setUser] = useState<AuthUser | null>(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        // Get current authenticated user
        const currentUser = await getCurrentUser();
        setUser(currentUser);

        // Fetch user session and get tokens
        // const session = await fetchAuthSession();
        // const googleToken = session.tokens.idToken; // Cognito ID Token (Google token)
        // setToken(googleToken); // Save the token
      } catch (err) {
        console.error("Error getting user data", err);
      }
    };
    getUserData();
  }, []);

  async function handleSignOut() {
    await signOut({ global: true });
  }

  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/login");
  }

  return (
    <NavHeader id="header">
      <LogoText>TiktokRecover</LogoText>
      {user?.username ? (
        <StyledButton type="button" onClick={handleSignOut}>
          Sign out
        </StyledButton>
      ) : (
        <StyledButton type="button" onClick={handleSignIn}>
          Sign in
        </StyledButton>
      )}
    </NavHeader>
  );
};

export default Header;
