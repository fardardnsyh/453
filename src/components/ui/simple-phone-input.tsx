//#region Import
import { forwardRef } from "react"

import Input from "./input"
//#endregion

const SimplePhoneInput = forwardRef<React.ElementRef<typeof Input>, React.ComponentPropsWithoutRef<typeof Input>>(
	({ onChange, ...props }, ref) => {
		const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
			const inputValue = e.target.value || ""

			// Regex pattern to match only numbers (0-9)
			const regex = /^[0-9]*$/

			// Check if the input value matches the regex pattern
			if (!!onChange && (regex.test(inputValue) || inputValue === "")) {
				onChange(e)
			}
		}

		return <Input ref={ref} {...props} onChange={handleChange} placeholder='Enter Phone numer' type='text' />
	}
)

SimplePhoneInput.displayName = "SimplePhoneInput"

export default SimplePhoneInput
