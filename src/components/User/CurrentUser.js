import React from 'react';
import PropTypes from 'prop-types';

import './CurrentUser.css';

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      { user.displayName }
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
