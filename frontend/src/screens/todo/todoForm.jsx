import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Grid from '../../components/template/Grid';
import IconButton from '../../components/Button/IconButton';
import { changeDescription, search } from './todoActions';

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
	if (e.key === 'Enter') {
		e.shiftKey ? this.props.handleSearch() : this.props.handle();
	} else if (e.key === 'Escape') {
		this.props.handleClear()
	}
}
	render() {
		return (
		<div role='form' className='todoForm'>
			<Grid cols="12 9 10">
        <input className="form-control" type="text" value={this.props.description} placeholder="Adicione uma tarefa" id="" onChange={this.props.changeDescription} onKeyUp={this.keyHandler}/>
      </Grid>
		<Grid cols="12 3 2">
			<IconButton hide={false} onClick={this.props.handle} style="primary" icon="plus" />
			<IconButton hide={false} onClick={this.props.handleSearch} style="info" icon="search" />
			<IconButton hide={false} onClick={this.props.handleClear} style="default" icon="close" />
		</Grid>
		</div>
	);
	}

}

const mapStateToProps = state => ({
	description: state.todo.description
});

const mapDispatchToProps = dispatch =>
			bindActionCreators({changeDescription, search}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoForm);
