import Taro, {Component} from '@tarojs/taro'
import {View} from '@tarojs/components'
import pageInit from '../../utils/pageInit'
import { getData } from '../../api/common.js'

import './index.less'

@pageInit()

class Index extends Component {

    config = {
        navigationBarTitleText: '首页'
    };

	constructor (props){
		super(props)
		this.state = {
			congratulations : 'Yeah! Congratulations!' ,
			canShare : true
		}
	}

    componentDidMount(){
      console.log('哈哈哈哈')
    //接口请求
      getData({
        pageSize: 6,
        currPage: 1,
        flag:'sub'
      })
    }

    render() {
        return (
			<View className="text">
				{ this.state.congratulations }
			</View>
        )
    }

	componentWillUnmount() {

	}

    //分享
	onShareAppMessage(){
		return{
			title : 'this page shareMessage'
		}
	}
}

export default Index
