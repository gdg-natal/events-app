import { NextResponse } from 'next/server'

import { encryptData } from '@/app/api/utils/encryption'

import { ParticipantType } from '@/app/types/certificate.types'

import participantsData from '@/data/participants.json'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')

  const participant = participantsData.find((p: ParticipantType) => p.email === email)

  if (!participant) {
    return NextResponse.json('Participant not found.', { status: 404 })
  }

  return NextResponse.json({ ...participant, hash: encryptData(JSON.stringify(participant)) })

}
