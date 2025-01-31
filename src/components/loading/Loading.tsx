import styled, { keyframes } from "styled-components";

const split = keyframes`
  0%,
  25% {
    width: 64px;
  }
  100% {
    width: 148px;
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it covers other content */
`;

const Loader = styled.span`
  width: 64px;
  height: 48px;
  position: relative;
  animation: ${split} 1s ease-in infinite alternate;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    left: 0;
    top: 0;
    transform: translateX(-10px);
    background: #fe2c55;
    opacity: 0.75;
    backdrop-filter: blur(20px);
  }

  &::after {
    left: auto;
    right: 0;
    background: #25f4ee;
    transform: translateX(10px);
  }
`;

export default function Loading() {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
}
