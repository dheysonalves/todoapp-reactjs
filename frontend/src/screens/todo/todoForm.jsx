import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../../components/template/Grid';
import IconButton from '../../components/Button/IconButton';
import { changeDescription, search, add, clear } from './todoActions';

class todoForm extends Component {
	constructor(props) {
		super(props);
		this.keyHandler = this.keyHandler.bind(this);
	}

	// Called as fast as it can!
	// React has called the actionCreator.
	componentWillMount() {
		this.props.search();
	}

keyHandler(e) {
	const { add, search, description } = this.props;
	if (e.key === 'Enter') {
		e.shiftKey ? search() : add(description);
	} else if (e.key === 'Escape') {
		this.props.clear()
	}
}
	render() {
	const { add, search, description } = this.props;

		return (
		<div role='form' className='todoForm'>
			<Grid cols="12 9 10">
        <input className="form-control" type="text" value={this.props.description} placeholder="Adicione uma tarefa" id="" onChange={this.props.changeDescription} onKeyUp={this.keyHandler}/>
      </Grid>
		<Grid cols="12 3 2">
			<IconButton hide={false} onClick={() => add(description)} style="primary" icon="plus" />
			<IconButton hide={false} onClick={() => search()} style="info" icon="search" />
			<IconButton hide={false} onClick={this.props.clear} style="default" icon="close" />
		</Grid>
		</div>
	);
	}

}

const mapStateToProps = state => ({
	description: state.todo.description
});

const mapDispatchToProps = dispatch =>
			bindActionCreators({changeDescription, search, add, clear}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);
