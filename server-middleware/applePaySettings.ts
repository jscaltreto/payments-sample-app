const applePaySecretsAreSet = !(
  process.env.APPLE_PAY_CERTIFICATE == null ||
  process.env.APPLE_PAY_PRIVATE_KEY == null
)

const merchantIdentityCertificate: string = applePaySecretsAreSet
  ? process.env.APPLE_PAY_CERTIFICATE!
  : ''
const merchantIdentityKey: string = applePaySecretsAreSet
  ? process.env.APPLE_PAY_PRIVATE_KEY!
  : ''

export { merchantIdentityCertificate, merchantIdentityKey }