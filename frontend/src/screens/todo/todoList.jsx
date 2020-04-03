import React from 'react';
import IconButton from '../../components/Button/IconButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { markAsDone, markAsPending, remove } from './todoActions';

const todoList = (props) => {

	const renderRows = () => {
		const list = props.list || []
		return list.map(todo => (
				<tr key={todo._id}>
					<td className={todo.done ? 'markedAsDone' : ''}>
						{todo.description}
					</td>
					<td className="text-center">
					<IconButton style="success" icon="check" onClick={() => props.markAsDone(todo)} hide={todo.done}/>
					<IconButton style="warning" icon="undo" onClick={() => props.markAsPending(todo)} hide={!todo.done}/>
					<IconButton style="danger" icon="trash-o" onClick={() => props.remove(todo)} hide={!todo.done}/>
					</td>
				</tr>
		))
	}

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Description</th>
					<th className="text-center tableActions">Actions</th>
				</tr>
			</thead>
			<tbody>
			{renderRows()}
			</tbody>
		</table>
	);
}

const mapStateToProps = state => ({
	list: state.todo.list
});

const mapDispatchToProps = dispatch =>
			bindActionCreators({markAsDone, markAsPending, remove}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
