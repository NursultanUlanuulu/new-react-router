import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'
import { Contact } from '../pages/Contact'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage'
import { ProfilesPage } from '../pages/ProfilesPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/profiles',
				element: <ProfilesPage />,
				children: [
					{
						path: '/profiles/:profileId',
						element: <ProfilePage />,
					},
				],
			},
			{
				path: '/contact',
				element: <Contact />,
			},
		],
	},
])
