import * as crypto from 'node:crypto'

// Every webview gets a fresh nonce so its inline scripts and styles are the
// only ones the content security policy will run.
export function generateNonce(): string {
  return crypto.randomBytes(16).toString('base64')
}
