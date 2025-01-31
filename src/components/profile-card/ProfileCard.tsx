import React, { memo } from "react";
// import ProfileImage from "../../assets/images/profile-image.jpeg";
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
import { useUsernameStore } from "../../store/useUsernameStore";
import { useNumberFormatter } from "../../utils/utils";

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
  const {
    userProfileData: {
      username,
      nickname,
      avatarThumb,
      followerCount,
      followingCount,
      heartCount,
      videoCount,
      bio,
    },
  } = useUsernameStore();
  const handleDownloadData = () => {
    navigate("/consent");
  };

  return (
    <ProfileCardWrapper>
      <ProfileContainer>
        <ProfileDetails>
          <ProfileImageWrapper src={avatarThumb} alt="Profile" />
          <ProfileUsername>@{username}</ProfileUsername>
          <ProfileName>{nickname}</ProfileName>
        </ProfileDetails>

        <StatsContainer>
          <InfoCardContainer>
            <InfoCard
              title="Followers"
              value={useNumberFormatter(followerCount)}
            />
            <InfoCard
              title="Following"
              value={useNumberFormatter(followingCount)}
            />
            <InfoCard title="Likes" value={useNumberFormatter(heartCount)} />
            <InfoCard title="Videos" value={useNumberFormatter(videoCount)} />
          </InfoCardContainer>
          {bio ? <Bio>{bio}</Bio> : <Bio>No bio available</Bio>}
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
