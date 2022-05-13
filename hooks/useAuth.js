import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { tokenName } from '../lib/constants';

const useAuth = () => {
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState();
	const [authToken, setAuthToken] = useState(null);
	const router = useRouter();

	useEffect(() => {
		console.log(tokenName);
		const token = localStorage.getItem(tokenName);
		console.log(token);

		if (token != null) {
			setAuthToken(() => token);
			setIsLoggedIn(() => true);
			console.log('token present');
		} else {
			setIsLoggedIn(() => false);
			console.log('token absent');

			router.push('/login');
		}
		setLoading(() => false);
	}, []);

	return { loading, isLoggedIn, token: authToken };
};

export default useAuth;
