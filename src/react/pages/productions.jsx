import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListWrapper from '../utils/list-wrapper';

class Productions extends Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.productions}
				pluralisedModel='productions'
			>
			</ListWrapper>
		);

	};

};

Productions.propTypes = { productions: PropTypes.array.isRequired };

const mapStateToProps = ({ productions }) => ({ productions });

export default connect(mapStateToProps)(Productions);
