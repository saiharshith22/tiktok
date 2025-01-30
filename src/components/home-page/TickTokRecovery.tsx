import { useState } from "react";
import { useUsernameStore } from "../../store/useUsernameStore";
import {
  Container,
  Input,
  SearchButton,
  SearchContainer,
  SecurityNotice,
  Subtitle,
  Title,
} from "./styled.components";
// import { useNavigate } from "react-router-dom";
import { useSearchUser } from "../../services/userDetails";

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

  console.log({
    data,
    isPending,
    error,
  });

  return (
    <Container>
      <Title>Recover Your TikTok Videos</Title>
      <Subtitle>
        Lost your favourite TikTok videos? We can help you recover them quickly
        and securely.
      </Subtitle>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Enter your TikTok username to recover videos"
          value={localUsername}
          onChange={(e) => setLocalUsername(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <SecurityNotice>
        This service is secure and compliant with all applicable regulations
      </SecurityNotice>
    </Container>
  );
}
