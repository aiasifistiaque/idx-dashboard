import React, { useEffect } from 'react';
import { Table, Row, Item } from '../util/table/Table';
import { useGetPendingRequestsQuery } from '../../store/services/productService';
import { useRouter } from 'next/router';
import Text from '../util/text/Text';

const BlockExplorer = () => {
	const { data, isLoading, error } = useGetPendingRequestsQuery('global');
	const router = useRouter();

	useEffect(() => {
		!isLoading && error && router.push('/error');
	}, [isLoading, error]);

	return (
		<Table title='All Transactions'>
			<Row>
				<Item title>Issuer</Item>
				<Item title>Credential Type</Item>
				<Item title>User email</Item>
				<Item title>Date</Item>
				<Item title>Status</Item>
			</Row>
			{!isLoading &&
				data.map((item, i) => (
					<Row key={i}>
						<Item>
							{item?.issuer?.name ? (
								item.issuer.name
							) : (
								<Text blank>Name Not Set</Text>
							)}
						</Item>
						<Item>{item.credentialType}</Item>
						<Item>{item.user}</Item>
						<Item date>{item.createdAt}</Item>
						<Item>{item.status}</Item>
					</Row>
				))}
		</Table>
	);
};

export default BlockExplorer;
