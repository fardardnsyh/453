//#region Import
import cn from "@/utils/cn"
import { Close, Content, Description, Overlay, Portal, Root, Title, Trigger } from "@radix-ui/react-dialog"
import LucideX from "~icons/lucide/x"
import { cva, type VariantProps } from "class-variance-authority"
//#endregion

const Sheet = (props: React.ComponentPropsWithoutRef<typeof Root>) => <Root {...props} />

const SheetOverlay = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Overlay>) => (
	<Overlay
		className={cn(
			"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className
		)}
		{...props}
	/>
)

const sheetVariants = cva(
	"fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",
	{
		defaultVariants: {
			side: "right",
		},
		variants: {
			side: {
				bottom:
					"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
				left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
				right:
					"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
				top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
			},
		},
	}
)

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof Content>,
		VariantProps<typeof sheetVariants> {}

const SheetContent = ({ children, className, side = "right", ...props }: SheetContentProps) => (
	<Portal>
		<SheetOverlay />
		<Content className={cn(sheetVariants({ side }), className)} {...props}>
			{children}
			<Close className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800'>
				<LucideX className='h-4 w-4' />
				<span className='sr-only'>Close</span>
			</Close>
		</Content>
	</Portal>
)

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)

const SheetTitle = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Title>) => (
	<Title className={cn("text-lg font-semibold text-slate-950 dark:text-slate-50", className)} {...props} />
)

const SheetDescription = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Description>) => (
	<Description className={cn("text-sm text-slate-500 dark:text-slate-400", className)} {...props} />
)

Sheet.Trigger = Trigger
Sheet.Close = Close
Sheet.Header = SheetHeader
Sheet.Content = SheetContent
Sheet.Footer = SheetFooter
Sheet.Title = SheetTitle
Sheet.Description = SheetDescription

export default Sheet
