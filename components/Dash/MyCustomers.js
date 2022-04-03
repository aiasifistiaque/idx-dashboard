import React from 'react';
import { Table, Row, Item } from '../util/table/Table';
import useGetMyCustomers from '../../hooks/useGetMyCustomers';

const MyCustomers = () => {
	const { loading, data, error } = useGetMyCustomers();
	if (loading) return null;
	return (
		<Table title='Customer List'>
			<Row>
				<Item title>Customer Email</Item>
			</Row>
			{!loading &&
				data.map((item, i) => (
					<Row key={i}>
						<Item>{item}</Item>
					</Row>
				))}
		</Table>
	);
};

export default MyCustomers;
