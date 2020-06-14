import React, { Component } from 'react'

import { withRouter } from 'umi'
import BaseLayout from './BaseLayout'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { ConfigProvider } from 'antd'

import {LAYOUT_CONFIG} from '../utils/constant'

@withRouter
class Layout extends Component {
  computeLayout(){
    const { children } = this.props
    const isBaseLayout = LAYOUT_CONFIG.baseLayout.indexOf(this.props.location.pathname) !== -1;
    switch(true) {
      case isBaseLayout: {
        return <BaseLayout>{children}</BaseLayout>
      }
      default: {
        return children;
      }
    }
  }
  render() {
    return (
      <ConfigProvider locale={zh_CN}>
          { this.computeLayout() }
      </ConfigProvider>
    )
  }
}

export default Layout
