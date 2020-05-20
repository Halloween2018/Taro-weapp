import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtNoticebar } from 'taro-ui'
import BasePage from '../../components/base-page'

class UserCenter extends BasePage {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <AtNoticebar marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
        {super._renderNav(2)}
      </View>
    )
  }
}

export default UserCenter
