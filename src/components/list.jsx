import React from 'react';

const List = (props) => {
	console.log(props.index)
	return (
		<li>
			<div>{props.el.name}</div>
			<div>{props.el.title}</div>
		</li>
	)
};

export default List;
