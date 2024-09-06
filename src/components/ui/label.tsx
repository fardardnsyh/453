//#region Import
import { Root } from "@radix-ui/react-label"
import { forwardRef } from "react"
import { twMerge } from "tailwind-merge"
//#endregion

const Label = forwardRef<React.ElementRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>(
	({ className, ...props }, ref) => (
		<Root
			className={twMerge(
				"mb-1.5 text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
				className
			)}
			ref={ref}
			{...props}
		/>
	)
)

Label.displayName = Root.displayName

export default Label
