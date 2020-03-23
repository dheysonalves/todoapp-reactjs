import React from 'react';
import Grid from '../../components/template/Grid';
import IconButton from '../../components/Button/IconButton';

const todoForm = (props) => {
	return (
		<div role='form' className='todoForm'>
			<Grid cols="12 9 19">
        <input className="form-control" type="text" value={props.description} placeholder="Adicione uma tarefa" id="" onChange={props.handleChange}/>
      </Grid>
		<Grid cols="12 3 2">
			<IconButton hide={false} onClick={props.handle} style="primary" icon="plus" />
			<IconButton hide={false} onClick={props.handleSearch} style="info" icon="search" />
		</Grid>
		</div>
	);
}

export default todoForm;
