import React from 'react';

const List = ({name, title}) => {
	return (
		<li>
			<div>{name}</div>
			<div>{title}</div>
		</li>
	)
};

export default List;
