import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 300px;
  padding: .5rem 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`

export const Button = styled.button`
  padding: .5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
`
