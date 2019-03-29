import React from 'react';

class Entry extends React.Component {
	render() {
		const information = this.props.information;

		return (
			<tr>
				<td>{information.playerID}</td> 
				<td>{information.completionTime} </td>
				<td>{information.attemptNum}</td>
				<td>{information.collectables}</td>
			</tr>
		)
	}
}

export default Entry;