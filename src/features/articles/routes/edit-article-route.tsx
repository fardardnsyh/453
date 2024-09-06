//#region Import
import NotFoundError from "@/components/common/notfound-error"
import useDispatch from "@/hooks/useDispatch"
import useSelector from "@/hooks/useSelector"
import { selectArticleById } from "@/lib/redux/selectors"
import { updateArticle } from "@/lib/redux/slice"
import convertToBase64 from "@/utils/convert-to-base64"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"

import type { ArticleSchemaType } from "../schema/article-schema"

import ArticleCreationForm from "../components/article-creation-form/article-creation-form"
//#endregion

const EditArticleRoute = () => {
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const { articleId } = useParams()

	const article = useSelector(selectArticleById(articleId ?? ""))

	if (!article?.content) return <NotFoundError />

	const handleUpdate = async ({ image, ...rest }: ArticleSchemaType) => {
		if (!articleId) return

		const base64Image = await convertToBase64(image)

		dispatch(updateArticle({ articleId, image: base64Image, ...rest }))

		navigate("/")

		toast.success("Article Updated successfully!")
	}

	return <ArticleCreationForm defaultValues={article as any} formType='UPDATE' onSubmit={handleUpdate} />
}

export default EditArticleRoute
