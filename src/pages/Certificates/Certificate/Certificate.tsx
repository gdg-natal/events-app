import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 600px;
  background: #EEE;
`

const Certificate = () => {
  const location = useLocation()
  const { participant } = location.state

  return (
    <Wrapper>
      <Content>
        <p>Certificamos que {participant?.name} comparaceu ao evento Google I/O Extended 2023 - Natal com a carga horaria de 10 horas</p>
        <p>Valide o certificado <a href={`https://localhost:3000/validate-certificate/${participant?.email}`}>AQUI</a></p>
      </Content>
    </Wrapper>
  )
}

export default Certificate
