import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from "../layout";
import App from '../../../../App';

class DevMainPage extends Page {



  forceUpdateBind = event => this.forceUpdate();


  forceUpdateFake() {

    // console.log("forceUpdate", callback);

    Object.assign(this.state, {
      currentDate: new Date(),
    });

    this.forceUpdate();

  }

  forceUpdateFakeBind = () => this.forceUpdateFake();


  setStateBind = event => this.setState({
    new_date: new Date(),
  });



  render() {

    const {
      ...other
    } = this.props;


    /**
     * При обновлении компонента если передавать children,
     * то это всегда изменяемые свойства, если это новый инстанс, 
     * а не простое скалярное значение.
     */

    return super.render(

      <Fragment>
        <div>
          <button
            onClick={this.forceUpdateBind}
          >
            Force update
          </button>

          <button
            onClick={this.forceUpdateFakeBind}
          >
            Force update with fake
          </button>

          <button
            onClick={this.setStateBind}
          >
            Change state
          </button>

        </div>

        <App
          props={this.props}
          state={this.state}
          context={this.context}
        // children={(<div>
        //   Children
        // </div>)}
        >
          {/* {new Date().toString()} */}
          Text
        </App>

      </Fragment>
    );
  }
}


export default DevMainPage;