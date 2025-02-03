import styled from "styled-components";

const CheckboxWrapper = styled.label<{ $visible: boolean }>`
  position: absolute;
  z-index: 4;
  inset: 16px 16px auto auto;
  width: 24px;
  height: 24px;
  display: ${({ $visible }) => ($visible ? "block" : "none")};

  input {
    display: none;
  }

  /* Custom Checkbox Circle */
  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  /* Checkmark */
  input:checked + span::after {
    content: "✔";
    font-size: 16px;
    color: white;
  }
`;

interface CustomCheckboxProps {
  videoUrl: string;
  selectedCards: string[];
  toggleVideos: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  videoUrl,
  selectedCards,
  toggleVideos,
}) => {
  return (
    <CheckboxWrapper $visible={toggleVideos}>
      <input
        type="checkbox"
        checked={selectedCards.includes(videoUrl)}
        onChange={(e) => e.stopPropagation()}
      />
      <span></span>
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
