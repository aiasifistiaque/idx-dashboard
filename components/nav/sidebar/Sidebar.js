import Link from 'next/link';
import React from 'react';
import styles from './SIdebar.module.css';

const Sidebar = ({ selected }) => {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<img src='/logo.png' />
			</div>

			<div className={styles.items}>
				<Link href='/'>
					<Item selected={selected}>Dashboard</Item>
				</Link>
				<Link href='/customers'>
					<Item selected={selected}>Customers</Item>
				</Link>
				<Item selected={selected}>Transactions</Item>
				<Item selected={selected}>Block Explorer</Item>
				<Item selected={selected}>Marketplace</Item>
				<Item selected={selected}>Business</Item>
			</div>
		</div>
	);
};

const Item = ({ children, selected, onClick }) => {
	return (
		<div className={styles.item} onClick={onClick}>
			<a style={selected == children ? { color: '#0078e7' } : {}}>{children}</a>
		</div>
	);
};

export default Sidebar;
