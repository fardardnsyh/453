//#region Import
import GravityUiSquareArticle from "~icons/gravity-ui/square-article"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"
//#endregion

const Logo = ({ className }: { className?: string }) => (
	<Link className={twMerge("inline-flex items-end gap-1 prevent-selection", className)} to='/'>
		<GravityUiSquareArticle className='size-4 shrink-0 text-[#ff0f7b] sm:size-5 ' />
		<h1 className='relative bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] bg-clip-text text-sm font-black uppercase leading-[14px] tracking-tighter text-transparent sm:text-base sm:leading-4'>
			Shours Articles
		</h1>
	</Link>
)

export default Logo
