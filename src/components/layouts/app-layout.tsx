//#region Import
import { lazy, Suspense } from "react"
import { Outlet } from "react-router-dom"

import Skeleton from "../ui/skeleton"
const AppHeader = lazy(() => import("./app-header"))
//#endregion

const AppLayout = () => (
	<main className='mx-auto flex h-screen w-screen max-w-7xl flex-col gap-2 overflow-hidden p-2 sm:gap-3 sm:p-4'>
		<Suspense fallback={<Skeleton className='h-16 rounded-lg' />}>
			<AppHeader />
		</Suspense>

		<div className='relative h-full overflow-hidden rounded-xl bg-white p-2 shadow-md sm:p-4'>
			<Suspense fallback={<Skeleton className='h-full rounded-xl' />}>
				<Outlet />
			</Suspense>
		</div>
	</main>
)

export default AppLayout
