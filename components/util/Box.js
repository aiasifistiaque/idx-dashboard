import React from 'react';
import styles from './Container.module.css';

const Box = ({
	horizontalFlex,
	verticalFlex,
	horizontal,
	children,
	shadow,
	align,
	style,
	flex,
}) => {
	return (
		<div
			className={`${
				horizontalFlex
					? styles.horizontalFlex
					: verticalFlex
					? styles.verticalFlex
					: horizontal
					? styles.horizontal
					: styles.vertical
			} ${shadow && styles.shadow} ${flex && styles.flex}`}
			style={{ margin: 0, padding: 0 }}>
			{children}
		</div>
	);
};

export default Box;
