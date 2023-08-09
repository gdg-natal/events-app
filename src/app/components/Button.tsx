'use client'
import styled from 'styled-components'
import { SpaceProps, space } from 'styled-system'

const Button = styled.button<SpaceProps>`
  ${space}
  font-weight: 500;
  padding: .75rem 2rem;
  cursor: pointer;
  color: var(--colors-white);
  background: var(--colors-blue);
  border: none;
  border-radius: 2rem;
`

export default Button
