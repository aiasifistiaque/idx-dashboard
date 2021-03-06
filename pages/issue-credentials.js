import React from 'react';
import AllTemplates from '../components/Dash/AllTemplates';
import IssueCredentials from '../components/Dash/IssueCredentials';
import Page from '../components/nav/Page/Page';

const IssueCredentialsPage = () => {
	return (
		<Page selected='Dashboard'>
			<IssueCredentials />
			<AllTemplates />
		</Page>
	);
};

export default IssueCredentialsPage;
