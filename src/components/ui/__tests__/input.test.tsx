//#region Import
import { render, screen, userEvent } from "@/utils/test-utils"
import "@testing-library/jest-dom"
import { createRef } from "react"
import { describe, expect, it } from "vitest"

import Input from "../input"
//#endregion

describe("Input Component", () => {
	it("renders the Input component", () => {
		render(<Input placeholder='Enter text' readOnly />)
		const inputElement = screen.getByRole("textbox")

		expect(inputElement).toBeInTheDocument()
		expect(inputElement).toHaveAttribute("placeholder", "Enter text")
	})

	it("accepts and displays input value", () => {
		render(<Input readOnly value='test value' />)
		const inputElement = screen.getByRole("textbox")

		expect(inputElement).toHaveValue("test value")
	})

	it("calls onChange handler when value changes", async () => {
		const handleChange = vi.fn()

		render(<Input onChange={handleChange} />)
		const inputElement = screen.getByRole("textbox")

		await userEvent.type(inputElement, "new value")
		expect(handleChange).toHaveBeenCalledTimes(9)
	})

	it("applies custom className", () => {
		render(<Input className='custom-class' readOnly />)
		const inputElement = screen.getByRole("textbox")

		expect(inputElement).toHaveClass("custom-class")
	})

	it("forwards ref correctly", () => {
		const ref = createRef<HTMLInputElement>()

		render(<Input readOnly ref={ref} />)
		const inputElement = screen.getByRole("textbox")

		expect(ref.current).toBe(inputElement)
	})

	it("handles invalid state correctly", () => {
		render(<Input aria-invalid='true' readOnly />)
		const inputElement = screen.getByRole("textbox")

		expect(inputElement).toHaveAttribute("aria-invalid", "true")
	})
})
