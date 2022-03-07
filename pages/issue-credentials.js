import React from 'react';
import IssueCredentials from '../components/Dash/IssueCredentials';
import LandingPage from '../components/Dash/LandingPage';
import Page from '../components/nav/Page/Page';

const IssueCredentialsPage = () => {
	return (
		<Page selected='Dashboard'>
			<IssueCredentials />
		</Page>
	);
};

export default IssueCredentialsPage;
