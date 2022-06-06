import React from 'react';
import Container from '../util/Container';
import styles from './design.module.css';

export const TemplateContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

const DataItem = ({ title, children, date, link, sub, small, color }) => {
	return (
		<div className={styles.dataItem}>
			<h6>{title}</h6>
			<p
				style={{
					color: color ? color : link ? 'dodgerblue' : 'black',
				}}>
				{date ? moment(children).format('LL') : children}
			</p>
			{sub && <p className={styles.sub}>{sub}</p>}
		</div>
	);
};

export const TemplateDesign = ({
	result,
	template,
	select,
	small,
	selected,
	selectable,
	onClick,
}) => {
	const style =
		select == 'one'
			? styles.cardOne
			: select == 'two'
			? styles.cardTwo
			: select == 'three'
			? styles.cardThree
			: styles.cardFour;
	return (
		<div
			onClick={onClick}
			className={`${styles.design} ${small && styles.small} ${
				selected && styles.select
			} ${selectable && styles.selectable}`}>
			<div className={style}>
				<div className={styles.header}>
					<h5>{template?.issuer && template.issuer}</h5>
				</div>

				<div className={styles.body}>
					{Object.keys(result).map((item, i) => (
						<DataItem title={item} key={i} small>
							{result[item]}
						</DataItem>
					))}
				</div>

				<div className={styles.footer}>
					<p className={styles.footerText}>{template?.name && template.name}</p>
				</div>
			</div>
		</div>
	);
};
