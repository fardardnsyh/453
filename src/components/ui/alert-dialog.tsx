//#region Import
import {
	Action,
	AlertDialogPortal,
	Cancel,
	Content,
	Description,
	Overlay,
	Portal,
	Root,
	Title,
	Trigger,
} from "@radix-ui/react-alert-dialog"
import { twMerge } from "tailwind-merge"

import { buttonVariants } from "./button"
//#endregion

const AlertDialog = (props: React.ComponentPropsWithoutRef<typeof Root>) => <Root {...props} />

const AlertDialogContent = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Content>) => (
	<AlertDialogPortal>
		<Overlay className='fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />

		<Content
			className={twMerge(
				"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-slate-800 dark:bg-slate-950 sm:rounded-lg",
				className
			)}
			{...props}
		/>
	</AlertDialogPortal>
)

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={twMerge("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={twMerge("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)

const AlertDialogTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Title>) => (
	<Title className={twMerge("text-lg font-semibold", className)} {...props} />
)

const AlertDialogDescription = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Description>) => (
	<Description className={twMerge("text-sm text-slate-500 dark:text-slate-400", className)} {...props} />
)

// const AlertDialogAction = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Action>) => (
// 	<Action className={twMerge(buttonVariants(), className)} {...props} />
// )

const AlertDialogCancel = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Cancel>) => (
	<Cancel className={twMerge(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)} {...props} />
)

AlertDialog.Trigger = Trigger
AlertDialog.Portal = Portal
AlertDialog.Content = AlertDialogContent
AlertDialog.Header = AlertDialogHeader
AlertDialog.Footer = AlertDialogFooter
AlertDialog.Title = AlertDialogTitle
AlertDialog.Description = AlertDialogDescription
AlertDialog.Action = Action
AlertDialog.Cancel = AlertDialogCancel

export default AlertDialog
