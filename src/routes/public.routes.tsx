//#region Import
import AppLoader from "@/components/common/app-loader"
import { lazy, Suspense } from "react"
import { Navigate, type RouteObject } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
const AuthRoute = lazy(() => import("@/features/auth/routes/auth-route"))
//#endregion

/**
 * @description Publicly Accessible Route Objects (routes)
 *              accessible only by unauthenticated users
 */
const publicRoutes: RouteObject[] = [
	{
		element: (
			<Suspense fallback={<AppLoader />}>
				<AuthRoute />
			</Suspense>
		),
		path: "/auth",
	},
	// Redirecting users always to 'auth' route
	{
		element: <Navigate to='/auth' />,
		path: "*",
	},
]

export default publicRoutes
