//#region Import
import cn from "@/utils/cn"
import SvgSpinnersRingResize from "~icons/svg-spinners/ring-resize"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import { Link } from "react-router-dom"
//#endregion

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva(
	"inline-flex-center gap-1.5 xs:gap-2 relative overflow-hidden whitespace-nowrap rounded-md text-sm font-medium transition-basic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300 [&>svg]:shrink-0",
	{
		defaultVariants: {
			size: "default",
			variant: "default",
		},
		variants: {
			size: {
				default: "h-10 px-4 py-2",
				icon: "h-10 w-10",
				lg: "h-11 rounded-md px-8",
				sm: "h-9 rounded-md px-3",
			},
			variant: {
				default:
					"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
				destructive:
					"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
				ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
				link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
				outline:
					"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-blue-500 dark:hover:bg-slate-800 dark:hover:text-slate-50",
				secondary:
					"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
			},
		},
	}
)

type CommonTypes = {
	/**
	 * Boolean used if button is disabled
	 */
	disabled?: boolean

	/**
	 * Boolean used if an asychronous action is pending
	 */
	loading?: boolean
} & VariantProps<typeof buttonVariants>

type ChildAsButtonProps = { as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>
type ChildAsLinkProps = { as?: "link" } & React.ComponentPropsWithoutRef<typeof Link>

export type ButtonProps = (ChildAsButtonProps | ChildAsLinkProps) & CommonTypes

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ as = "button", children, className, disabled, loading = false, size, variant, ...props }, ref) => {
		const Comp = as === "link" ? Link : "button"

		return (
			<Comp
				{...props}
				className={cn(buttonVariants({ className, size, variant }))}
				disabled={disabled || loading}
				// eslint-disable-next-line
				// @ts-ignore
				ref={ref}>
				{children}

				{loading && (
					<div className='absolute inset-0 z-10 h-full w-full bg-[rgba(255,255,255,0.7)] text-black backdrop-blur-xl flex-center'>
						<SvgSpinnersRingResize className='shrink-0 text-current' />
					</div>
				)}
			</Comp>
		)
	}
)

Button.displayName = "Button"

export default Button
