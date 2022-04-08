import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Row, Item } from '../util/table/Table';
import * as lib from '../../lib/constants';
import useAuth from '../../hooks/useAuth';

const VerifiedData = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const auth = useAuth();

	const getAllPendingFunctions = async e => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: JSON.parse(auth.token),
			},
		};
		try {
			const { data } = await axios.get(`${lib.api.backend}/issue`, config);
			setData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!auth.loading) {
			setLoading(true);
			getAllPendingFunctions();
		}
	}, [auth.loading]);

	return (
		<Table title='Pending Requests'>
			<Row>
				<Item title>Issuer</Item>
				<Item title>Credential Type</Item>
				<Item title>User email</Item>
				<Item title>Date</Item>
				<Item title>Status</Item>
			</Row>
			{!loading &&
				data.map((item, i) => (
					<Row key={i}>
						<Item>{item.issuer}</Item>
						<Item>{item.credentialType}</Item>
						<Item>{item.user}</Item>
						<Item date>{item.createdAt}</Item>
						<Item>{item.status}</Item>
					</Row>
				))}
		</Table>
	);
};

export default VerifiedData;
