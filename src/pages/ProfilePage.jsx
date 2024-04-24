import { useParams } from 'react-router-dom'

export function ProfilePage() {
	const { profileId } = useParams()
	return <div>ProfilePage {profileId}</div>
}
