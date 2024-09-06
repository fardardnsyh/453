/* eslint-disable perfectionist/sort-objects,react-refresh/only-export-components*/

//#region Import
import AppLayout from "@/components/layouts/app-layout"
import { lazy } from "react"
import { Navigate, type RouteObject } from "react-router-dom"

const EditArticleRoute = lazy(() => import("@/features/articles/routes/edit-article-route"))

const NewArticleRoute = lazy(() => import("@/features/articles/routes/new-article-route"))

const ArticleRoute = lazy(() => import("@/features/articles/routes/article-route"))

const ArticlesListRoute = lazy(() => import("@/features/articles/routes/articles-list-route/articles-list-route"))
//#endregion

/**
 * @description A List of Private-Only Route Objects (routes), accessible only by authenticated users
 */
const privateRoutes: RouteObject[] = [
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ element: <ArticlesListRoute />, path: "/" },

			{ element: <NewArticleRoute />, path: "article/new" },

			{ element: <EditArticleRoute />, path: "article/edit/:articleId" },

			{ element: <ArticleRoute />, path: "article/:articleId" },

			// FALLBACK - Redirect to Home IF ROUTE DOES NOT EXIST
			{ element: <Navigate to='/' />, path: "*" },
		],
	},
]

export default privateRoutes
