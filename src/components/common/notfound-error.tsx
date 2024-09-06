//#region Import
import { twMerge } from "tailwind-merge"
//#endregion

const NotFoundError = ({ className }: Pick<React.HTMLAttributes<HTMLDivElement>, "className">) => (
	<div className={twMerge("grid h-full w-full place-content-center gap-4 bg-white px-4", className)}>
		<h4 className='uppercase tracking-widest text-gray-500'>
			<span>400</span> | Resource Not Found
		</h4>
	</div>
)

export default NotFoundError
