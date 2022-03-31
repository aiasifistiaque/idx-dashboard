import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Row, Item } from '../util/table/Table';
import * as lib from '../../lib/constants';
import useAuth from '../../hooks/useAuth';

const AllTemplates = () => {
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
			const { data } = await axios.get(`${lib.api.backend}/template`, config);
			setData(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		setLoading(true);
		!auth.loading && getAllPendingFunctions();
	}, [auth.loading]);

	return (
		<Table title='Your Credential Templates'>
			<Row>
				<Item title>Template Name</Item>
				<Item title>Version</Item>
				<Item title>Created By</Item>
				<Item title>Unique Id</Item>
				<Item title>Created</Item>
			</Row>
			{!loading &&
				data.map((item, i) => (
					<Row key={i} href={`/issue/${item._id}`}>
						<Item>{item.name}</Item>
						<Item>{item.version}</Item>
						<Item>{item.issuer}</Item>
						<Item>{item._id}</Item>
						<Item date>{item.createdAt}</Item>
					</Row>
				))}
		</Table>
	);
};

export default AllTemplates;
