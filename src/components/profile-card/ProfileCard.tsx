import React, { memo } from "react";
import ProfileImage from "../../assets/images/profile-image.jpeg";
import {
  ProfileContainer,
  ProfileDetails,
  ProfileImageWrapper,
  ProfileName,
  ProfileUsername,
  StatsContainer,
  InfoCardWrapper,
  Bio,
  InfoCardContainer,
  InfoCardTitle,
  InfoCardValue,
  ButtonGroup,
  ProfileCardWrapper,
} from "./styled.components";
import { Search, Share2 } from "lucide-react";
import IconButton from "../icon-button/IconButton";
import { useNavigate } from "react-router-dom";

const InfoCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <InfoCardWrapper>
      <InfoCardValue>{value}</InfoCardValue>
      <InfoCardTitle>{title}</InfoCardTitle>
    </InfoCardWrapper>
  );
};

const ProfileCard: React.FC = () => {
  const navigate = useNavigate();
  const handleDownloadData = () => {
    navigate("/consent");
  };
  return (
    <ProfileCardWrapper>
      <ProfileContainer>
        <ProfileDetails>
          <ProfileImageWrapper src={ProfileImage} alt="Profile" />
          <ProfileUsername>@UserName</ProfileUsername>
          <ProfileName>RealName</ProfileName>
        </ProfileDetails>

        <StatsContainer>
          <InfoCardContainer>
            <InfoCard title="Followers" value="1.2M" />
            <InfoCard title="Following" value="100" />
            <InfoCard title="Likes" value="10M" />
            <InfoCard title="Videos" value="100" />
          </InfoCardContainer>
          <Bio>
            Professional dancer sharing tips and choreography 💃 | Dance
            tutorials every week
          </Bio>
        </StatsContainer>
      </ProfileContainer>
      <ButtonGroup>
        <IconButton
          icon={<Search size={16} />}
          label="Download Data"
          backgroundColor="#1E222B"
          onClick={handleDownloadData}
          styles={{
            borderRadius: 8,
            width: "100%",
            maxWidth: "157px",
          }}
        />
        <IconButton
          icon={<Share2 size={16} />}
          label="Share"
          backgroundColor="#FCFCFD"
          color="#4B5363"
          styles={{
            borderRadius: 8,
            border: "1px solid #D1D5DC",
            width: "100%",
            maxWidth: "157px",
          }}
        />
      </ButtonGroup>
    </ProfileCardWrapper>
  );
};

export default memo(ProfileCard);
