import {useState, useCallback} from 'react';

const storageName = 'userData';

export const useAuth = () => {
	
	const [token, setToken] = useState(null)
	const [userId, setUserId] = useState(null)

	const login = useCallback((jwtToken, id) => {
		setToken(jwtToken)
		setUserId(id)

		localStorage.setItem(storageName, JSON.stringify({
			userId, token
		}))
	},[])
	const logout = useCallback(() => {
		setUserId(null);
		localStorage.removeItem(storageName)
	}, [])

	useEffect(()=>{
		const data = JSON.parse(localStorage.getItem(storageName));

		if(data & data.token){
			login(data.token, data.userId)
		}
	}, [login])
	
	return {login, logout, toekn, userId}
}