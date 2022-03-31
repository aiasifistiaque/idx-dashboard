import React from 'react';
import CreateTemplate from '../components/Dash/CreateTemplate';
import Page from '../components/nav/Page/Page';

const CreateTemplatePage = () => {
	return (
		<Page selected='Dashboard'>
			<CreateTemplate />
		</Page>
	);
};

export default CreateTemplatePage;
