//#region Import
import DateFormatter from "@/components/common/date-formatter"
import { Link } from "react-router-dom"

import type { Article } from "../../types"

import ArticleCardDropdown from "../../components/article-card-dropdown"
//#endregion

const ArticleCard = ({ articleId, date, desc, image, title }: Omit<Article, "content">) => (
	<li className='group relative mx-auto w-full overflow-hidden rounded-lg shadow-md shadow-gray-100 ring-1 ring-gray-200/50 prevent-selection transition-basic hover:shadow-gray-300 sm:max-w-sm'>
		<ArticleCardDropdown articleId={articleId} className='absolute end-1 top-1' />

		<Link to={`/article/${articleId}`}>
			<div className='h-[244px] w-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${image})` }} />

			<div className='space-y-2 p-4'>
				<DateFormatter className='text-gray-400 group-hover:text-indigo-600' dateString={date} />
				<h3 className='text-lg font-semibold text-gray-800 duration-150 group-hover:text-indigo-600'>{title}</h3>
				<p className='text-sm text-gray-600 duration-150 group-hover:text-gray-800'>{desc}</p>
			</div>
		</Link>
	</li>
)

export default ArticleCard
