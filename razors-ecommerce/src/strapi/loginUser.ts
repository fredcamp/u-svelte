import url from './url'
import type { UserStrapi } from '../types/user.type'

export default async function (
  email: string,
  password: string
): Promise<UserStrapi> {
  try {
    const response = await fetch(`${url}/api/auth/local`, {
      method: 'POST',
      body: JSON.stringify({
        identifier: email,
        password,
      }),
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
