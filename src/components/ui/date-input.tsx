//#region Import
import dayjs from "dayjs"
import { forwardRef } from "react"

import Input from "./input"
//#endregion

interface DateInputProps<T extends string = string> {
	onChange: (v: T) => void
	value: T
}

const DateInput = forwardRef<React.ElementRef<typeof Input>, DateInputProps>(({ onChange, value, ...rest }, ref) => {
	const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value

		const dateInIso = dayjs(inputValue).toISOString()

		if (!dayjs(inputValue).isValid()) return

		onChange(dateInIso)
	}

	return (
		<Input
			onChange={onDateChange}
			placeholder='Type date of birth'
			ref={ref}
			type='date'
			value={value ? dayjs(value).format("YYYY-MM-DD") : ""}
			{...rest}
		/>
	)
})

DateInput.displayName = "DateInput"

export default DateInput
