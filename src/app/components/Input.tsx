'use client'
import styled from 'styled-components'
import { SpaceProps, space } from 'styled-system'

const Input = styled.input<SpaceProps>`
  ${space}
  width: 300px;
  padding: 1rem;
  border: 1px solid var(--colors-grey);
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &[aria-invalid=true] {
    border-color: var(--colors-red);
  }
`

export default Input
