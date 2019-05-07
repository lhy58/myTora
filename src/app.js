import '@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
    config = {
      pages: [
        'pages/home/index',
        'pages/cart/index',
        'pages/user/index'
      ],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#4a2a2e',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: "#666",
        selectedColor: "#b4282d",
        backgroundColor: "#fafafa",
        borderStyle: 'black',
        list: [{
          pagePath: "pages/home/index",
          iconPath: "./assets/tab-bar/home.png",
          selectedIconPath: "./assets/tab-bar/home-active.png",
          text: "首页"
        }, {
          pagePath: "pages/cart/index",
          iconPath: "./assets/tab-bar/cart.png",
          selectedIconPath: "./assets/tab-bar/cart-active.png",
          text: "购物车"
        }, {
          pagePath: "pages/user/index",
          iconPath: "./assets/tab-bar/user.png",
          selectedIconPath: "./assets/tab-bar/user-active.png",
          text: "个人"
        }]
      }
    };

    componentDidMount() {
		//将redux状态写入 Taro 中，方便使用
		Taro.$store = store;
    }

    componentDidShow() {
    }

    componentDidHide() {
    }

    componentCatchError() {
    }

    componentDidCatchError() {
    }

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        )
    }
}

Taro.render(<App/>, document.getElementById('app'))
