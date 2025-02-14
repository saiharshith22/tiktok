import {
  Avatar,
  Card,
  Image,
  Section,
  StarsContainer,
  StarWrapper,
  FullStar,
  HalfStar,
  StatContent,
  StatImg,
  StatItem,
  StatLabel,
  StatNumber,
  Stats,
  Subtitle,
  Testimonial,
  TestimonialsGrid,
  Title,
  UserHandle,
  UserInfo,
  UserMeta,
  UserName,
} from "./styled.components";
import { testimonials } from "./testimonial";
import PeopleImg from "../../assets/images/People community 1.svg";
import VideoImg from "../../assets/images/Video 1.svg";

const TestimonialCard = () => {
  return (
    <Section>
      <Title>What Our Users Say</Title>
      <Subtitle>
        Thousands of users trust TikTokRecover to retrieve their lost content.
        Here's what they have to say about our service.
      </Subtitle>

      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <UserInfo>
              <Avatar src={testimonial.avatar} alt={testimonial.name} />
              <UserMeta>
                <UserName>{testimonial.name}</UserName>
                <UserHandle>{testimonial.handle}</UserHandle>
              </UserMeta>
            </UserInfo>

            {/* Dynamic Star Ratings */}
            <StarsContainer>
              {[...Array(5)].map((_, i) => {
                const isFull = i < Math.floor(testimonial.rating);
                const isHalf = testimonial.rating - i >= 0.5 && testimonial.rating - i < 1;

                return (
                  <StarWrapper key={i}>
                    {isFull && <FullStar />}
                    {isHalf && <HalfStar />}
                    {!isFull && !isHalf && <FullStar className="empty-star" />}
                  </StarWrapper>
                );
              })}
            </StarsContainer>

            <Testimonial>{testimonial.text}</Testimonial>
          </Card>
        ))}
      </TestimonialsGrid>

      <Stats>
        <StatItem>
          <StatImg>
            <Image src={PeopleImg} alt="" />
          </StatImg>
          <StatContent>
            <StatNumber>50K+</StatNumber>
            <StatLabel>Happy Users</StatLabel>
          </StatContent>
        </StatItem>
        <StatItem>
          <StatImg>
            <Image src={VideoImg} alt="" />
          </StatImg>
          <StatContent>
            <StatNumber>1M+</StatNumber>
            <StatLabel>Videos Recovered</StatLabel>
          </StatContent>
        </StatItem>
      </Stats>
    </Section>
  );
};

export default TestimonialCard;
