//#region Import
import Button from "@/components/ui/button"
import LucideCheck from "~icons/lucide/check"
import MaterialSymbolsAddCircleOutlineRounded from "~icons/material-symbols/add-circle-outline-rounded"
import MaterialSymbolsCloseRounded from "~icons/material-symbols/close-rounded"

import type { ArticleFormType } from "./article-creation-form"

import CancelArticleDialog from "../../dialogs/cancel-article-dialog"
import MetadataDialog from "../../dialogs/metadata-dialog/metadata-dialog"
//#endregion

interface ArticleCreationHeaderProps {
	formType: ArticleFormType
}

const ArticleCreationHeader = ({ formType }: ArticleCreationHeaderProps) => {
	return (
		<header className='mb-2 flex items-center justify-between'>
			<MetadataDialog>
				<Button size='sm' title='Add Metadata' variant='secondary'>
					<MaterialSymbolsAddCircleOutlineRounded />
					<span>Metadata</span>
				</Button>
			</MetadataDialog>

			<div className='flex items-center justify-end gap-2'>
				<CancelArticleDialog formtype={formType}>
					<Button size='sm' type='reset' variant='destructive'>
						<MaterialSymbolsCloseRounded />
						<span className='hidden xs:block'>Cancel</span>
					</Button>
				</CancelArticleDialog>

				<Button className='bg-blue-500 text-white hover:bg-blue-500/80' size='sm' type='submit'>
					<LucideCheck />
					<span className='hidden xs:block'>{ctaButtonLabel[formType]}</span>
				</Button>
			</div>
		</header>
	)
}

export default ArticleCreationHeader

const ctaButtonLabel: Record<ArticleFormType, string> = {
	CREATE: "Submit",
	UPDATE: "Update",
}
