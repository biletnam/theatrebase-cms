import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListWrapper from '../utils/list-wrapper';

class Characters extends Component {

	render () {

		return (
			<ListWrapper
				instances={this.props.characters}
				pluralisedModel='characters'
			>
			</ListWrapper>
		);

	};

};

Characters.propTypes = { characters: PropTypes.array.isRequired };

const mapStateToProps = ({ characters }) => ({ characters });

export default connect(mapStateToProps)(Characters);
