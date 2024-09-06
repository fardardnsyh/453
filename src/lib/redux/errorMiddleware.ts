//#region Import
import { isRejectedWithValue, type Middleware } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
//#endregion

/**
 * Error middleware for Redux store.
 * @returns A middleware function that handles errors in Redux actions.
 */
const errorMiddleware: Middleware = () => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		// I'm only logging the error here in case it occured
		// Because this is just a simple application
		// But for advanced usage, we can use the action?.payload to show more detailed errors
		console.log(action?.payload)

		// RTK Rejection Error from errorMiddleware
		toast.error("Ops. An Error Occured!")
	}

	return next(action)
}

export default errorMiddleware
