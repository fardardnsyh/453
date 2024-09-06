//#region Import
import Button from "@/components/ui/button"
import useSelector from "@/hooks/useSelector"
import { selectUserArticles } from "@/lib/redux/selectors"
import LucideCirclePlus from "~icons/lucide/circle-plus"

import ArticleCard from "./article-card"
//#endregion

const ArticlesListRoute = () => {
	const articles = useSelector(selectUserArticles)

	return (
		<section className='h-full overflow-y-auto py-16' style={{ WebkitMaskBoxImage }}>
			<div className='absolute end-4 top-2 z-10 rounded-bl-lg bg-white p-4'>
				<Button as='link' className='gap-2 bg-[#ff0f7b] text-white hover:bg-[#ff0f7b]/80' size='sm' to={"/article/new"}>
					<LucideCirclePlus />
					Create
				</Button>
			</div>

			<div className='mx-auto flex h-full max-w-screen-xl flex-col gap-16 px-4 md:px-8'>
				<div className='sm:mx-auto sm:max-w-md sm:text-center'>
					<h1 className='mb-4 text-3xl font-extrabold text-gray-800 sm:text-4xl'>Latest Articles</h1>
					<p className='text-sm text-gray-500'>Articles cherished by the community.</p>
					<p className='text-sm text-gray-500'>Refreshed on an hourly basis.</p>
				</div>

				{!articles?.length && (
					<div className='h-full w-full flex-1 uppercase tracking-widest text-gray-400 flex-center'>
						No articles Found. You can add some!
					</div>
				)}

				{!!articles?.length && (
					<ul className='grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
						{articles?.map((article) => <ArticleCard key={article.articleId} {...article} />)}
					</ul>
				)}
			</div>
		</section>
	)
}

export default ArticlesListRoute

const WebkitMaskBoxImage =
	"linear-gradient(to bottom, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 1%, hsl(0 0% 0% / 1) 98%, hsl(0 0% 0% / 0))"
