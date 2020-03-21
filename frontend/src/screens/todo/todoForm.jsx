import React from 'react';
import Grid from '../../components/template/Grid';
import IconButton from '../../components/template/IconButton';

const todoForm = () => {
	return (

		<div role='form' className='todoForm'>
			<Grid cols="12 9 19">
        <input className="form-control" type="text" name="" placeholder="Adicione uma tarefa" id=""/>
      </Grid>
		<Grid cols="12 3 2">
			<IconButton hide={false} style="primary" icon="plus" />
		</Grid>
		</div>
	);
}

export default todoForm;
