import { useEffect, useState } from "react";
import {
  LogoContainer,
  LogoText,
  NavHeader,
  StyledButton,
  PlayIcon,
} from "./styled.components";
import {
  AuthUser,
  fetchAuthSession,
  getCurrentUser,
  signOut,
} from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { CircleHelp } from "lucide-react";

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
        if (currentUser) {
          async function getCognitoTokens() {
            try {
              const session = await fetchAuthSession();

              console.log("Session:", session);

              // Extract the tokens
              const idToken = session.tokens?.idToken?.toString(); // ID Token (JWT)
              const accessToken = session.tokens?.accessToken?.toString(); // Access Token (JWT)
              console.log("ID Token:", idToken);
              console.log("Access Token:", accessToken);

              return { idToken, accessToken };
            } catch (error) {
              console.error("Error fetching Cognito tokens:", error);
              return null;
            }
          }

          // Call this function after authentication
          getCognitoTokens();
        }
      } catch (err) {
        console.error("Error getting user data", err);
      }
    };
    if (!user) {
      getUserData();
    }
  }, [user]);

  async function handleSignOut() {
    await signOut({ global: true });
    setUser(null);
  }

  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/login");
  }

  return (
    <NavHeader id="header">
      <LogoContainer>
        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#E11D48" />
            </linearGradient>
          </defs>
        </svg>
        <PlayIcon />
        <LogoText>Revvio</LogoText>
      </LogoContainer>

      <div style={{ display: "flex", gap: "24px" }}>
        <StyledButton
          type="button"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            gap: "5px",
          }}
        >
          <CircleHelp size={16} />
          Help
        </StyledButton>
        {user?.username ? (
          <StyledButton type="button" onClick={handleSignOut}>
            Sign out
          </StyledButton>
        ) : (
          <StyledButton type="button" onClick={handleSignIn}>
            Sign in
          </StyledButton>
        )}
      </div>
    </NavHeader>
  );
};

export default Header;
