export interface User {
	id: string
	user_name: string
	email: string
}

export interface UserApi {
	status: string
	data: User
	message: string
	token: { access_token: string }
}
