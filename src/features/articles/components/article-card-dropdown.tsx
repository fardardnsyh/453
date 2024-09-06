//#region Import
import Button from "@/components/ui/button"
import Dropdown from "@/components/ui/dropdown"
import LucideEllipsis from "~icons/lucide/ellipsis"
import { useLocation, useNavigate } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import DeleteArticleDialog from "../dialogs/delete-article-dialog"
//#endregion

interface ArticleCardDropdownProps {
	/**
	 * Article Id use to manipulate an article
	 */
	articleId: string

	className?: string
}

const ArticleCardDropdown = ({ articleId, className }: ArticleCardDropdownProps) => {
	const navigate = useNavigate()

	const { pathname } = useLocation()

	return (
		<Dropdown>
			<Dropdown.Trigger asChild>
				<Button
					className={twMerge(
						"text-indigo-500 opacity-70 hover:text-indigo-600 hover:opacity-100 data-[state=open]:opacity-100",
						className
					)}
					size='icon'
					title='Options'
					variant='outline'>
					<LucideEllipsis className='shrink-0 text-xl' />
				</Button>
			</Dropdown.Trigger>
			<Dropdown.Content align='end'>
				<Dropdown.Item onClick={() => navigate(`/article/edit/${articleId}`, { state: { from: pathname } })}>
					Edit
				</Dropdown.Item>

				<Dropdown.Separator />

				<DeleteArticleDialog articleId={articleId}>
					<Dropdown.Item>Delete</Dropdown.Item>
				</DeleteArticleDialog>
			</Dropdown.Content>
		</Dropdown>
	)
}

export default ArticleCardDropdown
