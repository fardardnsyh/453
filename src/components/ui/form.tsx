//#region Import
import { Slot, type SlotProps } from "@radix-ui/react-slot"
import { createContext, forwardRef, useContext, useId } from "react"
import {
	Controller,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
	FormProvider,
	type FormProviderProps,
	useFormContext,
} from "react-hook-form"
import { twMerge } from "tailwind-merge"

import Label from "./label"
//#endregion

const Form = <
	TFieldValues extends FieldValues = FieldValues,
	TContext = any,
	TTransformedValues extends FieldValues = FieldValues,
>(
	props: FormProviderProps<TFieldValues, TContext, TTransformedValues>
) => <FormProvider {...props} />

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = { name: TName }

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => (
	<FormFieldContext.Provider value={{ name: props.name }}>
		<Controller {...props} />
	</FormFieldContext.Provider>
)

// eslint-disable-next-line react-refresh/only-export-components
export const useFormField = () => {
	const fieldContext = useContext(FormFieldContext)

	const { formState, getFieldState } = useFormContext()

	const fieldState = getFieldState(fieldContext.name, formState)

	if (!fieldContext) {
		throw new Error("useFormField should be used within <FormField>")
	}

	const id = useId()

	return {
		formDescriptionId: `${id}-form-item-description`,
		formItemId: `${id}-form-item`,
		formMessageId: `${id}-form-item-message`,
		id,
		name: fieldContext.name,
		...fieldState,
	}
}

interface FormItemProps extends SlotProps {
	/**
	 * Custom Bool check used to hide
	 */
	hideError?: boolean

	label?: React.ReactNode | string
}

const FormItem = forwardRef<React.ElementRef<typeof Slot>, FormItemProps>(
	({ className, hideError, label, ...props }, ref) => {
		const { error, formDescriptionId, formItemId, formMessageId } = useFormField()

		return (
			<div className={twMerge("flex w-[340px] max-w-full flex-col", className)}>
				{!!label && (
					<Label aria-invalid={!!error} className='!pointer-events-auto' htmlFor={formItemId}>
						{label}
					</Label>
				)}

				<Slot
					aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
					aria-invalid={!!error}
					id={formItemId}
					ref={ref}
					{...props}
				/>

				{!!error?.message && !hideError && (
					<p className={twMerge("ps-0.5 pt-0.5 text-xs font-medium text-red-500", className)} id={formMessageId}>
						{String(error?.message)}
					</p>
				)}
			</div>
		)
	}
)

FormItem.displayName = "FormItem"

Form.Item = FormItem
Form.Field = FormField

export default Form
