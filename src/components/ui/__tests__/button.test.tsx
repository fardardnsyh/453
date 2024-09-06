//#region Import
import { render, screen, userEvent } from "@/utils/test-utils"
import "@testing-library/jest-dom"
import { createRef } from "react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"

import Button from "../button"

//#endregion
describe("Button Component", () => {
	it("renders the Button component with default props", () => {
		render(<Button>Click me</Button>)
		const buttonElement = screen.getByRole("button", { name: /click me/i })

		expect(buttonElement).toBeInTheDocument()
		expect(buttonElement).toHaveClass(
			"inline-flex-center relative overflow-hidden whitespace-nowrap rounded-md text-sm font-medium transition-basic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300 h-10 px-4 py-2 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90"
		)
	})

	it("renders the Button component with loading state", () => {
		render(<Button loading>Click me</Button>)
		const buttonElement = screen.getByRole("button", { name: /click me/i })

		expect(buttonElement).toBeDisabled()
		expect(buttonElement).toHaveClass("relative")
		expect(screen.getByText("Click me")).toBeInTheDocument()
	})

	it("renders the Button component with different size and variant", () => {
		render(
			<Button size='lg' variant='destructive'>
				Delete
			</Button>
		)
		const buttonElement = screen.getByRole("button", { name: /delete/i })

		expect(buttonElement).toHaveClass(
			"h-11 rounded-md px-8 bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90"
		)
	})

	it("calls onClick handler when clicked", async () => {
		const handleClick = vi.fn()

		render(<Button onClick={handleClick}>Click me</Button>)
		const buttonElement = screen.getByRole("button", { name: /click me/i })

		await userEvent.click(buttonElement)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it("renders as a link component", () => {
		render(
			<MemoryRouter>
				<Button as='link' to='/home'>
					Go Home
				</Button>
			</MemoryRouter>
		)
		const linkElement = screen.getByRole("link", { name: /go home/i })

		expect(linkElement).toBeInTheDocument()
		expect(linkElement).toHaveAttribute("href", "/home")
	})

	it("applies custom className", () => {
		render(<Button className='custom-class'>Click me</Button>)
		const buttonElement = screen.getByRole("button", { name: /click me/i })

		expect(buttonElement).toHaveClass("custom-class")
	})

	it("forwards ref correctly", () => {
		const ref = createRef<HTMLButtonElement>()

		render(<Button ref={ref}>Click me</Button>)
		const buttonElement = screen.getByRole("button", { name: /click me/i })

		expect(ref.current).toBe(buttonElement)
	})
})
