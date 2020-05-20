// import React, { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {View} from '@tarojs/components'
import BottomNav from '../bottom-navigation'

class BasePage extends Taro.Component {
  _renderNav(actived: number) {
    return <BottomNav actived={actived} />
  }

  render() {
    return <View></View>
  }
}

export default BasePage
