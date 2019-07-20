import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from "../layout";
import DevApp from '../../../App';


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

      /**
       * https://github.com/ReactTraining/react-router/issues/5665
       */
      staticContext,

      children,
      ...other
    } = this.props;


    /**
     * При обновлении компонента если передавать children,
     * то это всегда изменяемые свойства, если это новый инстанс, 
     * а не простое скалярное значение.
     */

    // <Fragment>
    //   <div>
    //     <button
    //       onClick={this.forceUpdateBind}
    //     >
    //       Force update
    //       </button>

    //     <button
    //       onClick={this.forceUpdateFakeBind}
    //     >
    //       Force update with fake
    //       </button>

    //     <button
    //       onClick={this.setStateBind}
    //     >
    //       Change state
    //       </button>

    //   </div>

    //   <App
    //     props={this.props}
    //     state={this.state}
    //     context={this.context}
    //   // children={(<div>
    //   //   Children
    //   // </div>)}
    //   >
    //     {/* {new Date().toString()} */}
    //     Text
    //     </App>

    // </Fragment>


    return super.render(


      <div>
        <div
          id="buttons"
        >
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

        <div
          id="content"
        >
          <DevApp
            children={children || "Main page"}
            props={this.props}
            state={this.state}
            context={this.context}
            {...other}
          >
          </DevApp>
        </div>

      </div>
    );
  }
}


export default DevMainPage;