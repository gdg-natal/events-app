'use client'
import { useState } from 'react'
import styled from 'styled-components'

import Logo from '@/app/assets/logo.svg'

import { Button, Input } from '@/app/components'
import useToast from '@/app/state/useToast'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const validateCertificate = async (id: string) => {
  const response = await fetch(`/api/participant/validate?id=${id}`)

  return response.json()
}

const ValidateCertificate = () => {
  const [search, setSearch] = useState('')
  const [name, setName] = useState('')
  const { showToast } = useToast()

  const onSubmit = async () => {
    try {
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
          <Button onClick={onSubmit} mt="1rem">Verificar certificado</Button>
        </>
      ) : (
        <>
          <p>Este certificado é válido e foi gerado para: <strong>{name}</strong>.</p>
          <p>Código validador: <strong>{search}</strong>.</p>
          <Button onClick={onGoBack} mt="1rem">Voltar</Button>
        </>
      )}
    </Wrapper>
  )
}

export default ValidateCertificate
