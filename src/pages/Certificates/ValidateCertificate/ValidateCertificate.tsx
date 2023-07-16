import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import validateParticipant from '../utils/validateParticipant'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ValidateCertificate = () => {
  const { hash } = useParams()
  const participant = validateParticipant(hash ?? '')

  return (
    <Wrapper>
      {participant ? `Este certificado é válido e pertencente a ${participant?.name}.` : 'Este certificado não é um certificado válido'}
    </Wrapper>
  )
}

export default ValidateCertificate
