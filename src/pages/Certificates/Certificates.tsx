import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import validateParticipant from './utils/validateParticipant'

import { Wrapper, Button, Input } from './Certificates.styles'
import { ParticipantType } from './types'

const Certificates = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const onSubmit = async () => {
    const participant = validateParticipant(search)

    const certificatePath = participant?.name.split(' ').join('-').toLowerCase()

    if (participant) {
      navigate(`/certificate/${certificatePath}`, { state: { participant } })
    }

    console.log('dont exists participant')
  }

  return (
    <Wrapper>
      <Input placeholder="eu@examplo.com" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
      <Button onClick={onSubmit}>Generate Certificate</Button>
    </Wrapper>
  )
}

export default Certificates
