//#region Import
import { createSelector } from "@reduxjs/toolkit"

import type { RootState } from "./root-reducer"
//#endregion

export const selectUsers = (state: RootState) => state.app.users

export const selectAuthStatus = (state: RootState) => state.app.authStatus

export const selectCurrentSession = createSelector(selectUsers, (users) => users.find((user) => !!user.currentSession))

export const selectUserArticles = createSelector(selectCurrentSession, (session) => session?.articles)

export const selectArticleById = (articleId: string) =>
	createSelector(selectUserArticles, (articles) => articles?.find((article) => article.articleId === articleId))
