//#region Import
import { Component } from "react"

import ErrorFallback from "./error-fallback"
//#endregion

interface Props {
	children: React.ReactNode
	className?: string
	fallback?: React.ReactNode
}

interface State {
	hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	}

	public static getDerivedStateFromError(): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo)
	}

	// Clearing Console when ErrorBoundary Component isn't mounted any more (ex. When used In Portals)
	public componentWillUnmount(): void {
		console.clear()
	}

	public render() {
		if (this.state.hasError) {
			return this.props.fallback || <ErrorFallback />
		}

		return this.props.children
	}
}

export default ErrorBoundary
