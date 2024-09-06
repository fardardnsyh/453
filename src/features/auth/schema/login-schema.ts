//#region Import
import * as z from "zod"
//#endregion

const LoginSchema = z.object({
	email: z.string().trim().email(),
	password: z.string().trim().min(8, { message: "Password is too short" }).max(20, { message: "Password is too long" }),
})

export default LoginSchema

export type LoginSchemaType = z.infer<typeof LoginSchema>
