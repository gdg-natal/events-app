'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import logo from '@/app/assets/logo.svg'

import useToast from '@/app/state/useToast'

import { Button, Input } from '@/app/components'
import { Form } from './Certificates.styles'

const EMAIL_REGEXP = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

const validateCertificate = async (email: string) => {
  const response = await fetch(`/api/participant/validate?email=${email}`)

  return response.json()
}

const Certificates = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [error, setError] = useState<boolean>(!search.length)
  const router = useRouter()
  const { showToast } = useToast()

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target

    validate(value)
    setSearch(value)
  }

  const validate = (value: string): void => {
    let error = false

    if (!value.match(EMAIL_REGEXP)) error = true
    
    setError(error)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Image
        src={logo}
        width={300}
        height={200}
        alt="Logo"
      />
      <Input
        mt="1rem"
        placeholder="eu@exemplo.com"
        aria-invalid={!!search.length && error}
        value={search}
        onChange={handleChange}
      />
      <Button mt="1rem" disabled={error}>
        {isLoading ? 'Carregando...' : 'Gerar certificado'}
      </Button>
    </Form>
  )
}

export default Certificates
