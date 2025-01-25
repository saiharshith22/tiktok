import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px 0;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Dashboard = () => {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <Container>
      {message && (
        <Card>
          <h2>Login Successful!!</h2>
          <p>{message}</p>
        </Card>
      )}
    </Container>
  );
};

export default Dashboard;
