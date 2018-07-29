import React, { Component } from 'react';

import capitalise from '../../lib/capitalise';
import FormattedJson from '../components/formatted-json';
import PageTitle from '../components/page-title';

class ListWrapper extends Component {

	render () {

		const { props } = this;

		return (
			<React.Fragment>

				<PageTitle pageTitle={capitalise(props.pluralisedModel)} />

				<FormattedJson data={props.instances} />

				{props.children}

			</React.Fragment>
		);

	};

};

export default ListWrapper;
