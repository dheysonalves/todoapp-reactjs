import React from 'react';

export default props => (
	<header className='page-header'>
		<h2>{props.name} <small>{props.small}</small></h2>
		<h5>Keyboard Shortcuts <small>ENTER: add | SHIFT + ENTER: search | ESC : reset</small></h5>
	</header>
)
