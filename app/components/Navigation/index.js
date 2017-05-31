/**
*
* Navigation
*
*/

import React from 'react';


import styles from './styles.css';

function Navigation({ topics }) {
  return (
    <div className={styles.navigation}>
      We have {topics.length} in the nav component
    </div>
  );
}

navidation.propTypes = {
  topics: React.Proptypes.arrayOf(
    React.Proptypes.shape({
      name: React.Proptypes.string.isRequired,
      description: React.Proptypes.string.isRequired
    })
  )
}
export default Navigation;
