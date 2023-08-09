'use client'
import styled, { keyframes } from 'styled-components'

import { ToastStyleType } from '@/app/types/toast.types'

const slideInOut = keyframes`
  0% {
    margin-top: -100%;
    opacity: 0;
  }

  10% {
    margin-top: 0;
    opacity: .9;
  }

  15% {
    opacity: 1;
  }

  85% {
    opacity: 1;
  }

  90% {
    margin-top: 0;
    opacity: .9;
  }

  100% {
    margin-top: -100%;
    opacity: 0;
  }
`;

const colors = {
  'success': 'greenLight',
  'error': 'redLight',
  'warning': 'yellowLight',
  'info': 'blueLight'
}

export const Wrapper = styled.div<{ type: ToastStyleType }>`
  position: absolute;
  right: 1rem;
  top: 2rem;
  background: ${({ type }) => `var(--colors-${colors[type]})`};
  color: white;
  padding: .5rem 1rem;
  border-radius: .5rem;

  animation: ${slideInOut} 5s forwards;
`
