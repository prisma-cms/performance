import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import App from '../App';

export default class DevApp extends App {


  render() {

    return <Fragment>
      <div
        id="prisma-cms-performance-tester"
      >
      </div>

      {super.render()}
    </Fragment>
  }

}