import { NavLink, Outlet } from 'react-router-dom'
import { Container } from '../helpers/Container'
export function ProfilesPage() {
	const profiles = [1, 2, 3, 4, 5, 6]
	return (
		<>
			<Container>
				<div className='flex gap-7'>
					<div className='flex flex-col '>
						{profiles.map(profiles => (
							<NavLink
								to={`/profiles/${profiles}`}
								key={profiles}
								className={({ isActive }) => {
									return isActive ? ' text-red-700' : ''
								}}
							>
								Profile {profiles}
							</NavLink>
						))}
					</div>
					<Outlet />
				</div>
			</Container>
		</>
	)
}
