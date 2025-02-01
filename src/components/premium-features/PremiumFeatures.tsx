import { features } from "./features";
import {
  Card,
  CardDescription,
  CardTitle,
  Container,
  Grid,
  IconWrapper,
  Title,
} from "./styled.components";

export default function PremiumFeatures() {
  return (
    <Container>
      <Title>Premium Features</Title>
      <Grid>
        {features.map((feature) => (
          <Card key={feature.title}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
