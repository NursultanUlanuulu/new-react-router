import { NavLink } from 'react-router-dom'
import { Container } from '../helpers/Container'

function Header() {
	return (
		<>
			<header>
				<Container>
					<nav>
						<ul className='flex justify-between'>
							<li>
								<NavLink
									to='/'
									exact
									activeClassName='active-link'
									className={({ isActive }) => {
										return isActive ? ' text-red-700' : ''
									}}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/profiles'
									activeClassName='active-link'
									className={({ isActive }) => {
										return isActive ? ' text-red-700' : ''
									}}
								>
									Profile
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/contact'
									activeClassName='active-link'
									className={({ isActive }) => {
										return isActive ? ' text-red-700' : ''
									}}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
				</Container>
			</header>
		</>
	)
}

export default Header
