import { NextResponse } from 'next/server'

import { ParticipantType } from '@/app/types/certificate.types'

import { getParticipants } from '../../services/participants'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') ?? ''
  const email = searchParams.get('email')?.toLowerCase() ?? ''

  const participants = await getParticipants()
  const participant: ParticipantType = participants.find((p: ParticipantType) => p.id.toString() === id || p.email.toLowerCase() === email)

  if (!participant) {
    return NextResponse.json({ error: 'Certificado inválido.' }, { status: 404 })
  }

  return NextResponse.json({
    name: participant.name,
    message: 'Certificado validado com sucesso 🎉'
  }, { status: 200 })
}
