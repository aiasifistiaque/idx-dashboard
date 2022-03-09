import React from 'react';
import LandingPage from '../components/Dash/LandingPage';
import PendingRequests from '../components/Dash/PendingRequests';
import Page from '../components/nav/Page/Page';

const index = () => {
	return (
		<Page selected='Dashboard'>
			<LandingPage />
			<PendingRequests />
		</Page>
	);
};

export default index;
