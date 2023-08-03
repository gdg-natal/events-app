import crypto from 'crypto'
import config from '@/app/config'

const { secret_key, secret_iv, encryption_method = 'aes-256-cbc' } = config

if (!secret_key || !secret_iv) {
  throw new Error('secretKey and secretIV are required')
}

console.log('aaaaa', secret_key, secret_iv, encryption_method)

const key = crypto
  .createHash('sha512')
  .update(secret_key)
  .digest('hex')
  .substring(0, 32)
const encryptionIV = crypto
  .createHash('sha512')
  .update(secret_iv)
  .digest('hex')
  .substring(0, 16)

export function encryptData(data: string) {
  const cipher = crypto.createCipheriv(encryption_method, key, encryptionIV)
  return Buffer.from(
    cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
  ).toString('base64')
}

export function decryptData(encryptedData: string) {
  const buff = Buffer.from(encryptedData, 'base64')
  const decipher = crypto.createDecipheriv(encryption_method, key, encryptionIV)
  return (
    decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
    decipher.final('utf8')
  )
}
