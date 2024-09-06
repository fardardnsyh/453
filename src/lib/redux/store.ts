//#region Import
import { configureStore, type Store } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"

import errorMiddleware from "./errorMiddleware"
import reducer from "./root-reducer"
//#endregion

const store: Store = configureStore({
	// only uses devTools in development mode
	devTools: import.meta.env.NODE_ENV !== "production",

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(errorMiddleware),
	reducer,
})

const persistor = persistStore(store)

export default { persistor, store }

export type AppDispatch = typeof store.dispatch
