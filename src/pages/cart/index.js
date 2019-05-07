import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import pageInit from '../../utils/pageInit'

import './index.less'

@pageInit()

class Cart extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

  constructor(props) {
    super(props)
    this.state = {
      congratulations: '购物车',
      canShare: true
    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <View className="text">
        {this.state.congratulations}
      </View>
    )
  }

  componentWillUnmount () {

  }

  //分享
  onShareAppMessage () {
    return {
      title: 'this page shareMessage'
    }
  }
}

export default Cart