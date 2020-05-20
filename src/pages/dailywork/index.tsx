import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import BottomNav from '../../components/bottom-navigation'
import BasePage from '../../components/base-page'
import './index.scss'

type PageOwnProps = {}

type PageState = {}

class DailyWork extends BasePage {
  config: Config = {
    navigationBarTitleText: '每日工作记录'
  }

  render() {
    return (
      <View>
        这是新增加的页面
        <Button onClick={() => Taro.navigateBack()}>返回上一页</Button>
        <AtButton>Taro UI的按钮</AtButton>
        {/* <BottomNav actived={1} /> */}
        {super._renderNav(1)}
      </View>
    )
  }
}

export default DailyWork as ComponentClass<PageOwnProps, PageState>
