//#region Import
import * as z from "zod"

import LoginSchema from "./login-schema"
//#endregion

const SignupSchema = LoginSchema.extend({
	confirmPassword: z.string(),
	firstName: z
		.string()
		.trim()
		.refine((val) => /^\S+$/.test(val), { message: "No spaces Allowed for first name" }),
	lastName: z
		.string()
		.trim()
		.refine((val) => /^\S+$/.test(val), { message: "No spaces Allowed for last name" }),
}).refine((data) => data.password === data.confirmPassword, {
	message: "Passwords do not match",
	// path of error
	path: ["confirmPassword"],
})

export default SignupSchema

export type SignupSchemaType = z.infer<typeof SignupSchema>
