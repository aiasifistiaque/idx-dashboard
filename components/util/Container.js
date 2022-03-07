import React from 'react';
import styles from './Container.module.css';

const Container = ({
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
			style={style}>
			{children}
		</div>
	);
};

export default Container;
