//#region Import
import Button from "@/components/ui/button"
import Form from "@/components/ui/form"
import Input from "@/components/ui/input"
import useDispatch from "@/hooks/useDispatch"
import useSelector from "@/hooks/useSelector"
import { selectUsers } from "@/lib/redux/selectors"
import { registerUser, toggleAuthStatus } from "@/lib/redux/slice"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import SignupSchema, { type SignupSchemaType } from "../schema/signup-schema"
//#endregion

const SignupCard = () => {
	const dispatch = useDispatch()

	const users = useSelector(selectUsers)

	const form = useForm<SignupSchemaType>({
		resolver: zodResolver(SignupSchema),
	})

	const onFormSubmit = (data: SignupSchemaType) => {
		if (!data) return

		// First, I'm going to check if user already exist in Mock users db (in local storage)
		const userExist = users.find((entry) => entry.email === data.email)

		// User already exist in mock db. Thus, can't create new user with same email
		if (userExist) return form.setError("email", { message: "Email Already exist. Please use a different one" })

		// Else, we'll add new user to new users db, and add him to the current session
		dispatch(
			registerUser({
				email: data.email,
				firstName: data.firstName,
				lastName: data.lastName,
				password: data.password,
			})
		)
	}

	const goToLogin = () => dispatch(toggleAuthStatus("login"))

	return (
		<Form {...form}>
			<form className='mx-auto grid w-[350px] gap-6' onSubmit={form.handleSubmit(onFormSubmit)}>
				<div className='grid gap-1 text-start'>
					<h1 className='text-3xl font-bold'>Sign Up</h1>
					<p className='text-balance text-sm text-gray-500'>Enter your information to create an account</p>
				</div>
				<div className='grid gap-4'>
					<div className='grid grid-cols-2 gap-4'>
						<Form.Field
							control={form.control}
							name='firstName'
							render={({ field }) => (
								<Form.Item label='First name'>
									<Input placeholder='John' {...field} />
								</Form.Item>
							)}
						/>

						<Form.Field
							control={form.control}
							name='lastName'
							render={({ field }) => (
								<Form.Item label='Last name'>
									<Input placeholder='Doe' {...field} />
								</Form.Item>
							)}
						/>
					</div>

					<Form.Field
						control={form.control}
						name='email'
						render={({ field }) => (
							<Form.Item label='Email'>
								<Input placeholder='m@example.com' {...field} />
							</Form.Item>
						)}
					/>

					<Form.Field
						control={form.control}
						name='password'
						render={({ field }) => (
							<Form.Item label='Password'>
								<Input placeholder='Enter your password' type='password' {...field} />
							</Form.Item>
						)}
					/>

					<Form.Field
						control={form.control}
						name='confirmPassword'
						render={({ field }) => (
							<Form.Item label='Confirm Password'>
								<Input placeholder='Confirm your password' type='password' {...field} />
							</Form.Item>
						)}
					/>

					<Button className='w-full' type='submit'>
						Create an account
					</Button>
				</div>
				<div className='mt-4 text-center text-sm'>
					Already have an account?{" "}
					<Button className='inline-block' onClick={goToLogin} type='button' variant='link'>
						Sign in
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default SignupCard
