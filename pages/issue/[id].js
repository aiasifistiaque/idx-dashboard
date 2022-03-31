import { useRouter } from 'next/router';
import React from 'react';
import IssueToken from '../../components/Dash/IssueToken';
import Page from '../../components/nav/Page/Page';

const IssuePage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Page selected='Dashboard'>
			<IssueToken id={id} />
		</Page>
	);
};

export default IssuePage;
