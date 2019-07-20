import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import "./styles/less/styles.css";

// import SubscriptionProvider from "./components/SubscriptionProvider";
// import ContextProvider from "./components/ContextProvider";

// export {
//   ContextProvider,
//   SubscriptionProvider,
// }


class PrismaCmsPerformanceTesterInner extends Component {

  static propTypes = {
    prefix: PropTypes.string.isRequired,
  }


  componentDidUpdate(prevProps, prevState) {

    const keys = Object.keys(this.props);

    keys.map(key => {

      const value = this.props[key];

      const prevValue = prevProps[key];

      if (value !== undefined && prevValue !== undefined && value !== prevValue) {

        const {
          prefix,
        } = this.props;

        console.log(`${prefix} changed ${key.split("__").join("/")}`, value, prevValue);

      }

    });

    super.componentDidUpdate && super.componentDidUpdate(prevProps, prevState);

  }


  render() {
    return null;
  }
}



class PrismaCmsPerformanceTester extends Component {


  static propTypes = {
    prefix: PropTypes.string.isRequired,
  }

  static defaultProps = {
    prefix: "PrismaCmsPerformanceTester",
  }

  // componentWillUpdate(prevProps, prevState) {

  //   const keys = Object.keys(this.props);

  //   keys.map(key => {

  //     const value = this.props[key];

  //     const prevValue = prevProps[key];

  //     if (value !== undefined && prevValue !== undefined && value !== prevValue) {

  //       console.log(`PrismaCmsPerformanceTester ${key} changed`, value, prevValue);

  //     }

  //   });

  //   super.componentDidUpdate && super.componentDidUpdate(prevProps, prevState);

  // }



  render() {


    const {
      prefix,
      children,
    } = this.props;


    let output = [
      children,
    ];


    Object.keys(this.props).map(name => {

      const value = this.props[name];

      const key = name;

      output.push(<PrismaCmsPerformanceTesterInner
        key={key}
        prefix={`${prefix}__outer`}
        {...{
          [key]: value,
        }}
      />);


      /**
       * Also check inner props 1st level
       */
      if (value && typeof value === "object" && !(value instanceof Array)) {

        Object.keys(value).map(innerName => {

          const innerValue = value[innerName];

          const innerKey = `${key}__${innerName}`;

          output.push(<PrismaCmsPerformanceTesterInner
            key={innerKey}
            prefix={`${prefix}__inner`}
            {...{
              [innerKey]: innerValue,
            }}
          />);

        });

      }

    })


    return output;

  }
}


export default PrismaCmsPerformanceTester;
