import React from 'react';

import {connect} from 'react-redux';

const Dialog = ({regulation}) => (
  <div>
    {regulation.title}
  </div>
)

const mapStateToProps = ({regulation}) => ({
  regulation
})

export default connect(mapStateToProps)(Dialog);
