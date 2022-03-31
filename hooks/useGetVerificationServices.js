import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as lib from '../lib/constants';
import useAuth from './useAuth';

const useGetVerificationServices = () => {
	const [loading, setLoading] = useState();
	const [data, setData] = useState([]);
	const [error, setError] = useState();
	const auth = useAuth();

	const getTemplates = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: JSON.parse(auth.token),
			},
		};
		setLoading(true);
		try {
			const res = await axios.get(`${lib.api.backend}/verify`, config);
			setData(res.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setError(e);
			setLoading(false);
		}
	};
	useEffect(() => {
		!auth.loading && getTemplates();
	}, [auth.loading]);
	return { loading, data, error };
};

export default useGetVerificationServices;
