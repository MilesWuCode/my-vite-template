import { Auth } from './types'
import { authInstance } from './auth'

export function useAuth(): Auth {
  return authInstance!
}
