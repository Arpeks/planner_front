import Cookies from 'js-cookie'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const getAccessToken = () => {
	const accessToken = Cookies.get(EnumTokens.REFRESH_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
	Cookies.set(EnumTokens.REFRESH_TOKEN, accessToken, {
		// domain: 'localhost',
		sameSite: 'strict',
		expires: 1
	})
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.REFRESH_TOKEN)
}
