//#region Import
import useDispatch from "@/hooks/useDispatch"
import { signOutUser } from "@/lib/redux/slice"

import Logo from "../common/logo"
import Button from "../ui/button"
import Dropdown from "../ui/dropdown"
//#endregion

const AppHeader = () => {
	const dispatch = useDispatch()

	const signOut = () => dispatch(signOutUser())

	return (
		<header className='flex items-center justify-between gap-2 rounded-lg bg-white p-2 shadow-sm sm:gap-3 sm:p-3'>
			<Logo />

			<Dropdown>
				<Dropdown.Trigger asChild>
					<Button className='overflow-hidden rounded-full' size='icon' variant='outline'>
						<img
							alt='Avatar'
							className='overflow-hidden rounded-full'
							height={36}
							src='https://th.bing.com/th/id/R.898a454aed8eda454fd4ea6d11d27ebb?rik=KxVePyS8%2bDRP%2bA&pid=ImgRaw&r=0'
							width={36}
						/>
					</Button>
				</Dropdown.Trigger>
				<Dropdown.Content align='end'>
					<Dropdown.Label>My Account</Dropdown.Label>
					<Dropdown.Separator />
					<Dropdown.Item onClick={signOut}>Logout</Dropdown.Item>
				</Dropdown.Content>
			</Dropdown>
		</header>
	)
}

export default AppHeader
