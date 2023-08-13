'use client'
import { useState } from 'react'

import { Wrapper } from './styles'

import Logo from '@/app/assets/logo.svg'

import { Button, Input } from '@/app/components'
import useToast from '@/app/state/useToast'

const validateCertificate = async (id: string) => {
  const response = await fetch(`/api/participant/validate?id=${id}`)

  return response.json()
}

const ValidateCertificate = () => {
  const [search, setSearch] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const { showToast } = useToast()

  const onSubmit = async () => {
    try {
      setLoading(true)
      const response = await validateCertificate(search)

      if (response.error) {
        throw new Error(response.error)
      }

      showToast(response.message, 'success')

      setName(response?.name)
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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/\D/g, '');

    setSearch(result)
  }

  const onGoBack = () => {
    setName('')
    setSearch('')
  }

  console.log('eeeee', search.length)

  return (
    <Wrapper>
      {!name.length ? (
        <>
          <Logo />
          <Input
            maxLength={10}
            placeholder="Código validador"
            value={search}
            onChange={handleSearch}
            mt="1rem"
          />
          <Button
            mt="1rem"
            onClick={onSubmit}
            disabled={search.length < 10 || isLoading}
          >{isLoading ? 'Carregando...' : 'Verificar certificado'}</Button>
        </>
      ) : (
        <>
          <p>Este certificado é válido e foi gerado para: <strong>{name}</strong>.</p>
          <p>Código validador: <strong>{search}</strong>.</p>
          <Button onClick={onGoBack} mt="1rem" >Voltar</Button>
        </>
      )}
    </Wrapper>
  )
}

export default ValidateCertificate
