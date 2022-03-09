import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Row, Item } from '../util/table/Table';
import * as lib from '../../lib/constants';

const PendingRequests = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const getAllPendingFunctions = async e => {
		try {
			const { data } = await axios.get(`${lib.api.backend}/issue`);
			setData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		setLoading(true);
		getAllPendingFunctions();
	}, []);

	return (
		<Table title='Pending Requests'>
			<Row>
				<Item title>User Id</Item>
				<Item title>Credential Type</Item>
				<Item title>Date</Item>
				<Item title>Status</Item>
			</Row>
			{!loading &&
				data.map((item, i) => (
					<Row key={i}>
						<Item>{item.user}</Item>
						<Item>{item.credentialType}</Item>
						<Item date>{item.createdAt}</Item>
						<Item>{item.status}</Item>
					</Row>
				))}
		</Table>
	);
};

export default PendingRequests;
