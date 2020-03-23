import React from 'react';

const IconButton = (props) => {
	return (
		<div style={{display: 'inline'}}>
		{!props.hide &&
		<button className={'btn btn-'+props.style} onClick={props.onClick}>
			<i className={'fa fa-'+ props.icon}></i>
		</button>
		}
		</div>
	);
}

export default IconButton;
