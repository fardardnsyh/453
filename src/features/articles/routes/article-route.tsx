//#region Import
import DateFormatter from "@/components/common/date-formatter"
import NotFoundError from "@/components/common/notfound-error"
import useSelector from "@/hooks/useSelector"
import { selectArticleById } from "@/lib/redux/selectors"
import { useParams } from "react-router-dom"

import ArticleCardDropdown from "../components/article-card-dropdown"
//#endregion

const ArticleRoute = () => {
	const { articleId } = useParams()

	const article = useSelector(selectArticleById(articleId ?? ""))

	if (!article?.content || !articleId) return <NotFoundError />

	const { content, date, desc, image, title } = article

	return (
		<div className='flex h-full w-full flex-col space-y-4 overflow-y-auto p-2 pe-4'>
			<header className='space-y-4'>
				<div className='flex w-full items-start justify-between gap-2'>
					<div className='grid flex-1'>
						<DateFormatter dateString={date} />
						<h1 className='font-display mt-1 text-4xl font-bold tracking-tight text-indigo-900 sm:text-6xl'>{title}</h1>
						<p className='mt-5 text-base font-light text-gray-400'>{desc}</p>
					</div>

					<ArticleCardDropdown articleId={articleId} className='!opacity-100' />
				</div>

				<div
					className='mx-auto mt-8 h-72 w-full max-w-xl rounded-md bg-cover bg-center bg-no-repeat ring-1 ring-inset ring-gray-200'
					style={{ backgroundImage: `url(${image})` }}
				/>
			</header>

			<article className='prose-quoteless prose prose-zinc px-4 py-12' dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	)
}

export default ArticleRoute
