//#region Import
import cn from "@/utils/cn"
//#endregion

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("animate-pulse rounded-md bg-slate-100 dark:bg-slate-800", className)} {...props} />
)

export default Skeleton
