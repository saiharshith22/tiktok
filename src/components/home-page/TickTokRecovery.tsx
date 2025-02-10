import { useState } from "react";
import { useUsernameStore } from "../../store/useUsernameStore";
import {
  Container,
  Input,
  SearchContainer,
  SecurityNotice,
  Subtitle,
  Title
} from "./styled.components";
// import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useSearchUser } from "../../services/userDetails";
import IconButton from "../icon-button/IconButton";
import Loading from "../loading/Loading";

export default function TikTokRecovery() {
  const { username, setUsername } = useUsernameStore();
  const [localUsername, setLocalUsername] = useState(username);
  const { mutate, data, isPending, error } = useSearchUser();

  const handleSearch = () => {
    if (localUsername.trim()) {
      setUsername(localUsername); // Update Zustand store
      mutate(localUsername); // Call API
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  console.log({
    data,
    isPending,
    error,
  });

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <Container>
          <Title>Recover Your TikTok Videos</Title>
          <Subtitle>
            Lost your favourite TikTok videos? We can help you recover them
            quickly and securely.
          </Subtitle>
          <SearchContainer>
            <Input
              type="text"
              placeholder="Enter your TikTok username to recover videos"
              value={localUsername}
              onChange={(e) => setLocalUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <IconButton
              icon={<Search size={16} />}
              label="Search"
              backgroundColor="#1E222B"
              onClick={handleSearch}
              styles={{
                borderRadius: 8,
                width: "25vw",
                maxWidth: "133px",
              }}
            />
          </SearchContainer>
          <SecurityNotice>
            This service is secure and compliant with all applicable regulations
          </SecurityNotice>
        </Container>
      )}
    </>
  );
}
