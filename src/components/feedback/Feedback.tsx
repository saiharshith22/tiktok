"use client";

import { useState } from "react";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  Container,
  FormCard,
  FormGroup,
  Input,
  Label,
  RatingContainer,
  StarIcon,
  SubmitButton,
  Subtitle,
  Textarea,
  Title,
  FormFooter,
} from "./styled.components";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    feedback: "",
    sharePublicly: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, rating });
  };

  return (
    <Container>
      <Title>Share Your Experiences</Title>
      <Subtitle>
        We value your feedback. Let us know about your experience with
        TikTokRecover.
      </Subtitle>
      <FormCard>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="username">TikTok Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="@username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label>Rating</Label>
            <RatingContainer>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  $active={star <= rating}
                  onClick={() => setRating(star)}
                />
              ))}
            </RatingContainer>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="feedback">Your feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Share your experience with our service"
              value={formData.feedback}
              onChange={(e) =>
                setFormData({ ...formData, feedback: e.target.value })
              }
            />
          </FormGroup>
          <FormFooter>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                id="sharePublicly"
                checked={formData.sharePublicly}
                onChange={(e) =>
                  setFormData({ ...formData, sharePublicly: e.target.checked })
                }
              />
              <CheckboxLabel htmlFor="sharePublicly">
                Share publicly
              </CheckboxLabel>
            </CheckboxContainer>
            <SubmitButton type="submit">Submit Feedback</SubmitButton>
          </FormFooter>
        </form>
      </FormCard>
    </Container>
  );
};

export default FeedbackForm;
