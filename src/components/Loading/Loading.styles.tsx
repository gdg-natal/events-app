import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 578px) {
    img {
      width: 80%;
    }
  }
`

export const Loader = styled.span`
  width: 36px;
  height: 36px;
  border: 5px solid ${({ theme }) => lighten(0.3, theme.colors.yellow)};
  border-bottom-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
  }
`
