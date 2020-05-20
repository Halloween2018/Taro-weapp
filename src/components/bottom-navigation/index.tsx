import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { View } from '@tarojs/components'

export interface Props {
  actived: number
}

class BottomNavigation extends Taro.Component<Props> {
  constructor() {
    super(...arguments)
    this.state = {
      actived: 0
    }
  }

  handleTap = value => {
    this.setState({ actived: value })
  }

  render() {
    const { actived } = this.props
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', text: 8, iconType: 'home' },
          { title: '工作记录', iconType: 'edit' },
          { title: '个人中心', dot: true, iconType: 'user' }
        ]}
        onClick={this.handleTap}
        current={actived || this.state.actived}
      />
    )
  }
}

export default BottomNavigation
