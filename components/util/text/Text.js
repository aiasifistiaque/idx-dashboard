import React from 'react';

const Text = ({ blank, children }) => {
	if (blank)
		return (
			<p
				style={{
					color: 'rgba(0,0,0,.3)',
					fontStyle: 'italic',
					fontWeight: '500',
				}}>
				{children}
			</p>
		);
	return <p>{children}</p>;
};

export default Text;
