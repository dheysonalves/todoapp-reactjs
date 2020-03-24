import React from 'react';
import Grid from '../../components/template/Grid';
import IconButton from '../../components/Button/IconButton';

const todoForm = (props) => {

const keyHandler = (e) => {
	if (e.key === 'Enter') {
		e.shiftKey ? props.handleSearch() : props.handle();
	} else if (e.key === 'Escape') {
		props.handleClear()
	}
}

	return (
		<div role='form' className='todoForm'>
			<Grid cols="12 9 10">
        <input className="form-control" type="text" value={props.description} placeholder="Adicione uma tarefa" id="" onChange={props.handleChange} onKeyUp={keyHandler}/>
      </Grid>
		<Grid cols="12 3 2">
			<IconButton hide={false} onClick={props.handle} style="primary" icon="plus" />
			<IconButton hide={false} onClick={props.handleSearch} style="info" icon="search" />
			<IconButton hide={false} onClick={props.handleClear} style="default" icon="close" />
		</Grid>
		</div>
	);
}

export default todoForm;
