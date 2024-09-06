//#region Import
import AlertDialog from "@/components/ui/alert-dialog"
import Button from "@/components/ui/button"
import { useLocation } from "react-router-dom"

import type { ArticleFormType } from "../components/article-creation-form/article-creation-form"
//#endregion

interface CancelArticleDialogProps extends React.PropsWithChildren {
	formtype: ArticleFormType
}

const CancelArticleDialog: React.FC<CancelArticleDialogProps> = ({ children, formtype }) => {
	const { state } = useLocation()

	return (
		<AlertDialog>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
					<AlertDialog.Description>
						This action cannot be undone. {dialogLabels[formtype].mainMessage}
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<Button as='link' replace to={state?.from || "/"} type='button' variant='destructive'>
							{dialogLabels[formtype].actionMessage}
						</Button>
					</AlertDialog.Action>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog>
	)
}

export default CancelArticleDialog

const dialogLabels: Record<ArticleFormType, Record<"actionMessage" | "mainMessage", string>> = {
	CREATE: {
		actionMessage: "Yes, clear this article",
		mainMessage: "This will permanently delete this article's content and clear all your changes.",
	},

	UPDATE: {
		actionMessage: "Yes, clear changes",
		mainMessage: "This will permanently cancel all your changes made for this article",
	},
}
