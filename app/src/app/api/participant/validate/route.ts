import { NextResponse } from 'next/server'

import { encryptData } from '@/app/api/utils/encryption'

import { ParticipantType } from '@/app/types/certificate.types'

import participantsData from '@/data/participants.json'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') ?? ''

  if (id.length < 10) return NextResponse.json({ error: 'O código validador é composto por 10 números.' }, { status: 400 })

  const participant: ParticipantType | undefined = participantsData.find((p: ParticipantType) => p.id.toString() === id)

  if (!participant) {
    return NextResponse.json({ error: 'Certificado inválido.' }, { status: 404 })
  }

  return NextResponse.json({
    name: participant?.name,
    hash: encryptData(JSON.stringify(participant)),
    message: 'Certificado validado com sucesso 🎉'
  })
}
