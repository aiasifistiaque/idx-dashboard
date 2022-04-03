import React from 'react';
import useAuth from '../hooks/useAuth';
import Page from '../components/nav/Page/Page';
import MyCustomers from '../components/Dash/MyCustomers';

const CustomersPage = () => {
	const { isLoggedIn, loading } = useAuth();
	if (loading) return null;
	return (
		<Page selected='Customers'>
			<div style={{ height: 86 }} />
			<MyCustomers />
		</Page>
	);
};

export default CustomersPage;
