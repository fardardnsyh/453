//#region Import
import daysjs from "dayjs"
import { twMerge } from "tailwind-merge"
//#endregion

interface DateFormatterProps {
	className?: string
	dateString: string
}

const DateFormatter = ({ className, dateString }: DateFormatterProps) => (
	<time className={twMerge("text-sm tracking-wider text-gray-400", className)} dateTime={dateString}>
		{daysjs(dateString).format("dddd, MMMM D, YYYY")}
	</time>
)

export default DateFormatter
