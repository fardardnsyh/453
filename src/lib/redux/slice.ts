//#region Import
import type { Article } from "@/features/articles/types"
import type { User } from "@/features/auth/types"

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
//#endregion

export type AppSliceState = {
	/**
	 * Bool check used to check whether user is signing in or registering
	 * Useful for Condionally rendering `<LoginCard />` or `<SignupCard />`
	 */
	authStatus: "login" | "signup"

	users: User[]
}

const initialState: AppSliceState = {
	authStatus: "login",
	users: [],
}

const appSlice = createSlice({
	initialState,
	name: "app",
	reducers: {
		addArticle: (state, { payload }: PayloadAction<Article>) => {
			state.users = state.users.map((user) => {
				if (user.currentSession)
					return {
						...user,
						articles: [...(user.articles || []), payload],
					}

				return user
			})
		},

		deleteArticle: (state, { payload }: PayloadAction<string>) => {
			state.users = state.users.map((user) => {
				if (user.currentSession)
					return {
						...user,
						articles: user.articles.filter((article) => article.articleId !== payload),
					}

				return user
			})
		},

		loginUser: (state, { payload: email }: PayloadAction<User["email"]>) => {
			state.users = state.users.map((user) => {
				if (user.email === email) return { ...user, currentSession: true }

				return user
			})
		},

		registerUser: (state, { payload }: PayloadAction<Omit<User, "articles">>) => {
			return {
				...state,
				users: [...state.users, { ...payload, articles: [], currentSession: true }],
			}
		},

		signOutUser: (state) => {
			state.users = state.users.map((user) => {
				if (user.currentSession) return { ...user, currentSession: false }

				return user
			})
		},

		toggleAuthStatus: (state, { payload }: PayloadAction<AppSliceState["authStatus"]>) => {
			state.authStatus = payload
		},

		updateArticle: (state, { payload }: PayloadAction<Article>) => {
			state.users = state.users.map((user) => {
				if (user.currentSession)
					return {
						...user,
						articles: user?.articles.map((article) => {
							if (article.articleId === payload.articleId) return payload

							return article
						}),
					}

				return user
			})
		},
	},
})

export const { addArticle, deleteArticle, loginUser, registerUser, signOutUser, toggleAuthStatus, updateArticle } =
	appSlice.actions

export default appSlice.reducer
