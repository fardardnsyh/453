//#region Import
import { combineReducers } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import appReducer, { type AppSliceState } from "./slice"
//#endregion

// const APP_PREFIX = `${import.meta.env.VITE_APP_PREFIX}_`
const APP_PREFIX = "SHOURS_ARTICLES"

export type RootState = {
	app: AppSliceState
}

const rootPersistConfig = {
	key: "_ROOT",
	keyPrefix: APP_PREFIX,
	storage,
	version: 1,
	whitelist: ["app"] as Partial<keyof RootState>[],
}

const reducer = combineReducers({
	app: appReducer,
})

export default persistReducer(rootPersistConfig, reducer)
