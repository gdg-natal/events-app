'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Logo from '@/app/assets/logo.svg'

import useToast from '@/app/state/useToast'

import { Button, Input } from '@/app/components'
import { Wrapper } from './Certificates.styles'

const validateCertificate = async (email: string) => {
  const response = await fetch(`/api/participant/validate?email=${email}`)

  return response.json()
}

const Certificates = () => {
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const { showToast } = useToast()
  
  const onSubmit = async () => {
    try {
      setLoading(true)
      const response = await validateCertificate(search)

      if (response.error) {
        throw new Error(response.error)
      }

      showToast(response.message, 'success')

      router.push(`/certificates/generate/${search}`)
    } catch (error) {
      if (error instanceof Error) {
        showToast(error.message, 'error')

        return
      }

      showToast('Erro ao validar certificado.', 'error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Wrapper>
      <Logo />
      <Input
        placeholder="eu@exemplo.com"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        mt="1rem"
      />
      <Button onClick={onSubmit} mt="1rem">{loading ? 'Carregando...' : 'Gerar certificado'}</Button>
    </Wrapper>
  )
}

export default Certificates
