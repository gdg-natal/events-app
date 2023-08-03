'use client'
import styled from 'styled-components'

const Input = styled.input`
  width: 300px;
  padding: .5rem 1rem;
  border: 3px solid var(--colors-red);
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export default Input
