import participants from '../mocks/participants.json'
import { ParticipantType } from '../types'

const validateParticipant = (email: string) =>
  participants.find((participant: ParticipantType) => participant?.email === email)

export default validateParticipant
