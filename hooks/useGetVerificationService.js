import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as lib from '../lib/constants';
import useAuth from './useAuth';

const useGetVerificationService = id => {
	const [loading, setLoading] = useState();
	const [data, setData] = useState([]);
	const [error, setError] = useState();

	const getData = async () => {
		setLoading(true);
		try {
			const res = await axios.get(`${lib.api.backend}/verify/${id}`);
			setData(res.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setError(e);
			setLoading(false);
		}
	};
	useEffect(() => {
		id != 'undefined' && getData();
	}, [id]);
	return { loading, data, error };
};

export default useGetVerificationService;
