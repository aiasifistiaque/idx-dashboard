import React from 'react';
import useAuth from '../hooks/useAuth';
import Page from '../components/nav/Page/Page';
import BlockExplorer from '../components/Dash/BlockExplorer';

const Blockexplorerpage = () => {
	const { isLoggedIn, loading } = useAuth();
	if (loading) return null;
	return (
		<Page selected='Block Explorer'>
			<div style={{ height: 78 }} />
			<BlockExplorer />
		</Page>
	);
};

export default Blockexplorerpage;
