//#region Import
import useSelector from "@/hooks/useSelector"
import { selectCurrentSession } from "@/lib/redux/selectors"
import { useRoutes } from "react-router-dom"

import privateRoutes from "./private.routes"
import publicRoutes from "./public.routes"
//#endregion

const AppRoutes = () => {
	const currentSession = useSelector(selectCurrentSession)

	const routes = currentSession ? privateRoutes : publicRoutes

	const element = useRoutes(routes)

	return <>{element}</>
}

export default AppRoutes
