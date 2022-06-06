import React from 'react';
import Container from '../util/Container';
import DataItem from '../util/text/DataItem';
import styles from './Dash.module.css';

export const TemplateDesignOne = ({ result, template }) => {
	return (
		<Container shadow>
			<div className={styles.idCard}>
				<h5>{template?.issuer?.name && template.issuer.name}</h5>
				<div
					style={{
						height: 2,
						borderBottom: '2px solid rgba(30,144,255,.2)',
						borderRadius: 4,
						margin: '8px 0',
						marginBottom: 16,
					}}
				/>

				{Object.keys(result).map((item, i) => (
					<div style={{}} key={i}>
						<DataItem title={item}>{result[item]}</DataItem>
					</div>
				))}

				<div
					style={{
						borderBottom: '1px solid rgba(30,144,255,.2)',
						borderRadius: 4,
						margin: '8px 0',
						marginTop: 16,
					}}
				/>
				<p
					style={{
						color: '#888',
						fontWeight: '600',
						textAlign: 'right',
						fontSize: '.8rem',
					}}>
					{template?.name && template.name}
				</p>
			</div>
		</Container>
	);
};
