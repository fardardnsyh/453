//#region Import
import type { Article } from "../articles/types"
//#endregion

export interface User {
	articles: Article[]

	currentSession?: boolean

	email: string
	firstName: string
	lastName: string
	password: string
}

export type Session = Omit<User, "password">
