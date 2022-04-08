import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import LandingPage from '../components/Dash/LandingPage';
import PendingRequests from '../components/Dash/PendingRequests';
import Page from '../components/nav/Page/Page';

const Transactionspage = () => {
	const { isLoggedIn, loading } = useAuth();
	if (loading) return null;
	return (
		<Page selected='Transactions'>
			<div style={{ height: 78 }} />
			<PendingRequests />
		</Page>
	);
};

export default Transactionspage;
