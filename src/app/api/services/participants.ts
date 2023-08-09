const API_URL = process.env.API_URL
const MASTER_API_KEY = process.env.MASTER_API_KEY ?? ''
const ACCESS_API_KEY = process.env.ACCESS_API_KEY ?? ''
const ENDPOINT = process.env.ENDPOINT

export const getParticipants = async () => {
  const { record } = await (await fetch(`${API_URL}/${ENDPOINT}`, {
    headers: {
      'X-Master-Key': MASTER_API_KEY,
      'X-Access-Key': ACCESS_API_KEY
    }
  })).json()

  return record ?? []
}
