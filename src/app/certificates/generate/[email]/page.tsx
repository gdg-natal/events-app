'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { PDFViewer } from '@react-pdf/renderer'

import { ParticipantType } from '@/app/types/certificate.types'

import CertificatePDF from './CertificatePDF'

const getParticipant = async (email: string) => {
  const response = await fetch(`/api/participant?email=${email}`)

  return response.json()
}

const Certificate = () => {
  const [participant, setParticipant] = useState<ParticipantType>()
  const params: { email?: string } = useParams()
  const { email = '' } = params

  useEffect(() => {
    const fetchParticipant = async () => {
      const participant = await getParticipant(email)

      setParticipant(participant)
    }

    fetchParticipant()
  }, [email])

  return (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
      <CertificatePDF participant={participant} />
    </PDFViewer>
  )
}

export default Certificate
