import React from 'react';
import TransactionReceipt from '../../components/Dash/TransactionReceipt';
import Page from '../../components/nav/Page/Page';
import Container from '../../components/util/Container';

const Transactonpage = () => {
	return (
		<Page selected='Transactions'>
			<TransactionReceipt />
		</Page>
	);
};

export default Transactonpage;
