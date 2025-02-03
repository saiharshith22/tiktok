import React, { CSSProperties } from "react";
import styled from "styled-components";

type ButtonSize = "small" | "medium" | "large";

interface IconButtonProps {
  icon?: string | React.ReactNode;
  label: string;
  iconPosition?: "start" | "end";
  onClick?: () => void;
  color?: string;
  backgroundColor?: string;
  size?: ButtonSize;
  styles?: CSSProperties; // Accepts additional inline styles
}

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "small":
      return `
        font-size: 12px;
        padding: 5px;
      `;
    case "large":
      return `
        font-size: 16px;
        padding: 10px;
      `;
    case "medium":
    default:
      return `
        font-size: 14px;
        padding: 10px;
      `;
  }
};

const ButtonWrapper = styled.button<{
  color?: string;
  bgColor?: string;
  size: ButtonSize;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: ${({ bgColor }) => bgColor ?? "#2662d9"};
  color: ${({ color }) => color ?? "white"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;

  ${({ size }) => getSizeStyles(size)}

  &:hover {
    background: ${({ bgColor }) =>
      bgColor ? darkenColor(bgColor) : "#1f4ea7"};
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const darkenColor = (color: string) => {
  return color.length === 7 ? `${color}D9` : "#1f4ea7";
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  iconPosition = "start",
  onClick,
  color,
  backgroundColor,
  size = "medium",
  styles,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      color={color}
      bgColor={backgroundColor}
      size={size}
      style={styles}
    >
      {iconPosition === "start" && (
        <IconWrapper>
          {typeof icon === "string" ? (
            <ImageIcon src={icon} alt="icon" />
          ) : (
            icon
          )}
        </IconWrapper>
      )}
      <span style={{ fontSize: "14px", fontFamily: "Inter" }}>{label}</span>
      {iconPosition === "end" && (
        <IconWrapper>
          {typeof icon === "string" ? (
            <ImageIcon src={icon} alt="icon" />
          ) : (
            icon
          )}
        </IconWrapper>
      )}
    </ButtonWrapper>
  );
};

export default IconButton;
