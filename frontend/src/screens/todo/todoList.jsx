import React from 'react';
import IconButton from '../../components/Button/IconButton';
import {connect} from 'react-redux';

const todoList = (props) => {

	const renderRows = () => {
		const list = props.list || []
		return list.map(todo => (
				<tr key={todo._id}>
					<td className={todo.done ? 'markedAsDone' : ''}>
						{todo.description}
					</td>
					<td className="text-center">
					<IconButton style="success" icon="check" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}/>
					<IconButton style="warning" icon="undo" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}/>
					<IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(todo)} hide={!todo.done}/>
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

export default connect(mapStateToProps)(todoList);
