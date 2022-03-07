import Link from 'next/link';
import React from 'react';
import Button from '../buttons/Button';
import styles from './Dash.module.css';

const IssueCredentials = () => {
	return (
		<div className={styles.container}>
			<div className={styles.vertical}>
				<div className={styles.issue}>
					<div
						style={{
							flex: 0.6,
							justifyContent: 'center',
							display: 'flex',
							flexDirection: 'column',
						}}>
						<h5>Create a Credential Template</h5>
						<br />
						<p>
							This is where you will decide what information your Customer{`'`}s
							Credentials will include. All your templates will be saved below.
						</p>
					</div>
					<div className={styles.issueCred} style={{ flex: 1 }}>
						<img
							src='/robo.png'
							alt='Create Template'
							style={{ height: 180, objectFit: 'contain' }}
						/>
						<div className={styles.vertical}>
							<Link href={'/create-template'}>
								<Button>Create New Template</Button>
							</Link>
							<Button outlined>Explore Template</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IssueCredentials;
