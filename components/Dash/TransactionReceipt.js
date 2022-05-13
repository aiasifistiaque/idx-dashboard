import { useRouter } from 'next/router';
import React from 'react';
import { useGetTransactionReceiptQuery } from '../../store/services/productService';
import Box from '../util/Box';
import Container from '../util/Container';
import { Mr } from '../util/Margins';
import { Contain } from '../util/table/Table';
import DataItem from '../util/text/DataItem';
import Text from '../util/text/Text';
import styles from './Dash.module.css';

const TransactionReceipt = () => {
	const router = useRouter();
	const { transaction } = router.query;
	const { data, isLoading, error } = useGetTransactionReceiptQuery(transaction);

	if (isLoading || error) return null;
	return (
		<div className={styles.container}>
			<Container flex shadow>
				<Container shadow>
					<h4>
						{data?.credential?.template?.name ? (
							`${data.credential.template.name} Transaction`
						) : (
							<Text blank>Not Defined</Text>
						)}
					</h4>
					<DataItem title='Status'>
						{data?.credential?.status && data.credential.status}
					</DataItem>
					<Box horizontalFlex>
						<DataItem
							title='From'
							sub={
								data?.credential?.issuer?.wallet &&
								data.credential.issuer.wallet
							}>
							{data?.credential?.issuer?.name && data.credential.issuer.name}
						</DataItem>
						<Mr size={64} />
						<DataItem title='To' sub={data?.user?.wallet && data.user.wallet}>
							{data?.user?.name && data.user.name}
						</DataItem>
					</Box>
				</Container>
				<Container shadow>
					<h4>Transaction</h4>
					<Box horizontalFlex>
						<DataItem title='Issuer'>
							{data?.credential?.issuer?.name && data.credential.issuer.name}
						</DataItem>
						<Mr size={64} />
						<DataItem title='Credential Type'>
							{data?.credential?.template?.name &&
								data.credential.template.name}
						</DataItem>
					</Box>
					<Box>
						<DataItem title='Issue Date' date>
							{data?.credential?.createdAt && data.credential.createdAt}
						</DataItem>
					</Box>
					<Box>
						<DataItem title='Transaction Hash' link>
							0xa77611e488d3ca9ab808fae44511b7beb7e3fa934a
						</DataItem>
					</Box>
					<Box>
						<DataItem title='Digital Signature'>
							{data?.credential?.token && data.credential.token}
						</DataItem>
					</Box>
					<Box horizontal>
						<DataItem title='Transaction Fees'>3.2 IDX</DataItem>
						<Mr size={64} />
						<DataItem title='Block Number'>234234</DataItem>
					</Box>
				</Container>
			</Container>
		</div>
	);
};

export default TransactionReceipt;
