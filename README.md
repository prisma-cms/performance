

# Prisma-CMS Performance

Performance testing component for [@prisma-cms](https://github.com/prisma-cms/boilerplate) and any other React components.


## Install

### yarn

```
yarn add -D @prisma-cms/performance
```

### npm
```
npm i @prisma-cms/performance --save-dev
```

## Usage

Pass any props for updating check
```
import React, { Component } from 'react';
import PrismaCmsPerformanceTester from "@prisma-cms/performance";

export default class Test extends Component {

  render(){

    return <PrismaCmsPerformanceTester 
      props={this.props}
      state={this.state}
      context={this.context}
    />
  }

}
```

See the browser console to detect which properties change when the Test component is updated.
