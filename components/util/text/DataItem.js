import React from 'react';
import styles from './Text.module.css';
import moment from 'moment';

const DataItem = ({ title, children, date, link, sub }) => {
	return (
		<div className={styles.dataItem}>
			<h6>{title}</h6>
			<p style={{ color: link ? 'dodgerblue' : 'black' }}>
				{date ? moment(children).format('LL') : children}
			</p>
			{sub && <p className={styles.sub}>{sub}</p>}
		</div>
	);
};

export default DataItem;
