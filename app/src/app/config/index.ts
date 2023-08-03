const { NODE_ENV, SECRET_KEY, SECRET_IV, ENCRYPTION_METHOD } = process.env

const config = {
  env: NODE_ENV,
  secret_key: SECRET_KEY,
  secret_iv: SECRET_IV,
  encryption_method: ENCRYPTION_METHOD
}

export default config