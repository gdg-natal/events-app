import { NextResponse } from 'next/server'

import { ParticipantType } from '@/app/types/certificate.types'

import { getParticipants } from '@/app/api/services/participants'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')?.toLowerCase()

  const participants = await getParticipants()
  const participant = participants.find((p: ParticipantType) => p.email.toLowerCase() === email)

  if (!participant) {
    return NextResponse.json('Participant not found.', { status: 404 })
  }

  return NextResponse.json(participant, { status: 200 })
}
