//#region Import
import reduxStore from "@/lib/redux/store"
import { HelmetProvider } from "react-helmet-async"
import { Toaster } from "react-hot-toast"
import { Provider as ReduxProvider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import AppLoader from "./components/common/app-loader"
import ErrorBoundary from "./components/common/error-boundary"
// import AuthPoviderContext from "./providers/auth-provider"
import AppRoutes from "./routes/app.routes"
//#endregion

const App = () => (
	<ErrorBoundary>
		<ReduxProvider store={reduxStore.store}>
			<PersistGate loading={<AppLoader />} persistor={reduxStore.persistor}>
				<HelmetProvider>
					<Router>
						<AppRoutes />

						<Toaster position='top-center' toastOptions={{ duration: 4000 }} />
					</Router>
				</HelmetProvider>
			</PersistGate>
		</ReduxProvider>
	</ErrorBoundary>
)

export default App
