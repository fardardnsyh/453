//#region Import
import { Button, ToggleItem as Item, Root, Separator, ToggleGroup } from "@radix-ui/react-toolbar"
import React from "react"
import { twMerge } from "tailwind-merge"
//#endregion

const Toolbar = ({ className, ...props }: React.ComponentProps<typeof Root>) => (
	<Root
		className={twMerge(
			"w-full flex-col overflow-hidden rounded-md bg-opacity-30 shadow-sm shadow-indigo-200 ring-1 ring-indigo-100 sm:flex sm:flex-row",
			className
		)}
		{...props}
	/>
)

const ToolbarGroup = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof ToggleGroup>) => (
	<ToggleGroup {...props} className={twMerge(className, "flex flex-wrap")} />
)

const ToolbarItem = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Item>) => (
	<Item className={twMerge(btnClassName, className)} {...props} />
)

const ToolbarButton = ({
	active,
	className,
	type = "button",
	...props
}: { active?: boolean } & React.ComponentPropsWithoutRef<typeof Button>) => (
	<Button type={type} {...props} className={twMerge(btnClassName, className)} data-state={active} />
)

const btnClassName =
	"inline-flex-center ml-1 rounded md:p-2 p-1 first:ml-0 flex-shrink-0 flex-grow-0 basis-auto bg-white bg-opacity-70 text-sm md:text-base leading-none text-gray-600 outline-none ring-0 transition-basic hover:bg-indigo-100 hover:text-indigo-700 focus:relative focus:ring-2 focus:ring-indigo-300 data-[state=true]:bg-indigo-200 data-[state=true]:text-indigo-800 data-[state=on]:bg-indigo-200 data-[state=on]:text-indigo-800 disabled:pointer-events-none disabled:opacity-30"

Toolbar.Separator = Separator
Toolbar.Group = ToolbarGroup
Toolbar.Item = ToolbarItem
Toolbar.Button = ToolbarButton

export default Toolbar
