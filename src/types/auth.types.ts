export interface IAuthForm {
	email: string
	password: string
}

export interface IUser {
	id: number
	email: string

	name?: string
	surname?: string
	middlename?: string

	department?: string
	position?: string
	role?: string
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
