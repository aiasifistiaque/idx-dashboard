import React from 'react';
import Button from '../buttons/Button';
import styles from './Dash.module.css';
import Link from 'next/link';

const LandingPage = () => {
	return (
		<div className={styles.container} style={{ flex: 0 }}>
			<Button outlined>Explore Templates</Button>
			<Link href='/issue-credentials'>
				<Button outlined>Issue Credentials</Button>
			</Link>
		</div>
	);
};

export default LandingPage;
