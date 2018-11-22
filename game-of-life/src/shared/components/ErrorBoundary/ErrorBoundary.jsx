import React from 'react';
import PropTypes from 'prop-types';

//A simple yet somehow elegant way to handle errors.
export class ErrorBoundary extends React.Component {
	componentDidCatch(error, info) {
		const { raiseError } = this.props;
		raiseError(error);
	}

	render() {
		const { error, children } = this.props;

		if (error) {
			return (
				<h2 className="" data-testid="errorBoundary">There has been an error, please refresh the App.</h2>
			);
		}
		return children;
	}
}

ErrorBoundary.propTypes = {
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	raiseError: PropTypes.func,
	children: PropTypes.object,
}

export default ErrorBoundary;