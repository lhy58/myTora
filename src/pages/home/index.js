import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '../../actions/home'
//import pageInit from '../../utils/pageInit'

import './index.less'

//@pageInit()
@connect(state => state.home, { ...actions })
class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  };

  constructor(props) {
    super(props)
    this.state = {
      congratulations: '首页',
      canShare: true
    }
  }

  componentDidMount () {
    this.props.dispatchHome().then(() => {
      this.setState({ loaded: true })
    })
  }

  render () {
    const { homeInfo, searchCount, recommend, pin } = this.props
    console.log('recommend', recommend)
    console.log('homeInfo', homeInfo)
    console.log('pin', pin)
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

export default Home