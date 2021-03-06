import React, { useEffect } from 'react';
import { Table, Row, Item } from '../util/table/Table';
import { useGetPendingRequestsQuery } from '../../store/services/productService';
import { useRouter } from 'next/router';

const PendingRequests = () => {
	const { data, isLoading, error } = useGetPendingRequestsQuery('');
	const router = useRouter();

	useEffect(() => {
		!isLoading && error && router.push('/error');
	}, [isLoading, error]);

	return (
		<Table title='Pending Requests'>
			<Row>
				<Item title>Issuer</Item>
				<Item title>Credential Type</Item>
				<Item title>User email</Item>
				<Item title>Date</Item>
				<Item title>Status</Item>
			</Row>
			{!isLoading &&
				data.map((item, i) => (
					<Row key={i} href={`/transaction/${item._id}`}>
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

export default PendingRequests;
