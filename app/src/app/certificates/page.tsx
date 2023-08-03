'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button, Input } from '@/app/components'
import { Wrapper } from './Certificates.styles'

const Certificates = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const onSubmit = async () => {
    router.push(`/certificates/generate/${search}`)
  }

  return (
    <Wrapper>
      <Input placeholder="eu@examplo.com" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
      <Button onClick={onSubmit}>Gerar certificado</Button>
    </Wrapper>
  )
}

export default Certificates
