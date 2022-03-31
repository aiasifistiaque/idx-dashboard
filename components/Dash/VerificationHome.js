import Link from 'next/link';
import React from 'react';
import Button from '../buttons/Button';
import styles from './Dash.module.css';

const VerificationHome = () => {
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
						<h5>Verification Services</h5>
						<br />
						<p>
							Verification Services are how you verify your Customer{`'`}s
							Credentials.Here is where you decide what Credentials your
							customers have to present tobe able to access one of your
							services.
						</p>
					</div>
					<div className={styles.issueCred} style={{ flex: 1 }}>
						<img
							src='/robo.png'
							alt='Create Template'
							style={{ height: 180, objectFit: 'contain' }}
						/>
						<div className={styles.vertical}>
							<Link href={'/create-verification-service'}>
								<Button>Create Verification Services</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerificationHome;
