import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Row, Item } from '../util/table/Table';
import * as lib from '../../lib/constants';
import useAuth from '../../hooks/useAuth';

const ServiceData = ({ id }) => {
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
			const { data } = await axios.get(
				`${lib.api.backend}/datarequest/${id}`,
				config
			);
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
	}, [auth.loading, id]);

	return (
		<Table title='Verified Data'>
			<Row>
				{!loading &&
					data &&
					data[0]?.attributes &&
					data[0].attributes.map((item, i) => (
						<Item key={i} title>
							{item}
						</Item>
					))}
			</Row>

			{!loading &&
				data.map((item, i) => (
					<Row key={i}>
						{item?.data &&
							item.data.map((item, i) => <Item key={i}>{item.value}</Item>)}
					</Row>
				))}
		</Table>
	);
};

export default ServiceData;
