export interface LoginRequestData {
	/** admin 或 editor */
	username: 'admin' | 'editor'
	/** 密码 */
	password: string
}

export interface UserInfoRequestData {
	avatar: string
	client: string
	email: string
	group_list: { id: number; name: string }[]
	id: number
	name: string
	permission_list: string[] | null
	permissions: string[]
	phone_number: string
	resource_list: string[]
	studio_display: string
	studio_id: number
	super_user: boolean
	username: string
}

export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<UserInfoRequestData>
