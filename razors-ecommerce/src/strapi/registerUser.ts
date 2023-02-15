import url from './url'
import type { UserStrapi } from '../types/user.type'

export default async function (
  username: string,
  email: string,
  password: string
): Promise<UserStrapi> {
  try {
    const response = await fetch(`${url}/api/auth/local/register`, {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const error = await response.json()
      return error
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
