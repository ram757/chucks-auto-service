/**
 *
 * ServicesPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

export function ServicesPage() {
  return (
    <div>
      <Helmet>
        <title>ServicesPage</title>
        <meta name="description" content="Description of ServicesPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ServicesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ServicesPage);
