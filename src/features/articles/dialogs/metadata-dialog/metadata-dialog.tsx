//#region Import
import Dialog from "@/components/ui/dialog"
import { lazy, useState } from "react"

const MetadataDialogContent = lazy(() => import("./metadata-dialog-content"))
//#endregion

interface MetadataDialogProps {
	/**
	 * Trigger Button/Element for triggering Dilaog
	 */
	children: React.ReactNode
}

const MetadataDialog = ({ children }: MetadataDialogProps) => {
	const [open, setOpen] = useState(false)

	return (
		<Dialog onOpenChange={setOpen} open={open}>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>

			<Dialog.Content className='h-[589px] w-[382px] sm:h-[597px] sm:w-[390px]' title="Article's Metadata">
				<MetadataDialogContent onDialogClose={() => setOpen(false)} />
			</Dialog.Content>
		</Dialog>
	)
}

export default MetadataDialog
