import React from 'react';
import styles from './Input.module.css';

const Select = ({ label, children, required }) => {
	return (
		<div className={styles.input}>
			<label>
				{label} {required && <span style={{ color: 'red' }}>*</span>}
			</label>
			{children}
		</div>
	);
};

export default Select;
