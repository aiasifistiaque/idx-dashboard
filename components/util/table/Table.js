import React from 'react';
import moment from 'moment';
import styles from './Table.module.css';

export const Table = ({ children, loading, title }) => {
	return (
		<div className={styles.container}>
			<h5>{title}</h5>
			{!loading ? <div>{children}</div> : <h6>loading...</h6>}
		</div>
	);
};

export const Row = ({ children }) => {
	return <div className={styles.items}>{children}</div>;
};

export const Item = ({ children, title, date }) => {
	return (
		<div className={styles.item}>
			{title ? (
				<h6>{children}</h6>
			) : (
				<p>{date ? moment(children).calendar() : children}</p>
			)}
		</div>
	);
};
