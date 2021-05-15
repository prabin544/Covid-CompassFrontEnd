import React from 'react';

import {withAuth0} from '@auth0/auth0-react'

class SavedCities extends React.Component {
  render() {
    const {user, isAuthenticated} = this.props.auth0;
    return(
      <div>
        {isAuthenticated ? user.name : ''}
      <h1>Saved cities</h1>

      

      </div>
    )
  }
}

export default withAuth0(SavedCities);