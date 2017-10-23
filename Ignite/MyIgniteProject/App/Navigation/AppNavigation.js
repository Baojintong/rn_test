import {StackNavigator, DrawerNavigator, TabNavigator} from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import page1 from '../Modules/Module1/Containers/Home'
import page2 from '../Modules/Module2/Containers/Home'
import page3 from '../Modules/Module3/Containers/Home'
import {Text, View, Button, Image} from 'react-native';

import styles from './Styles/NavigationStyles'

const _TabNavigator = TabNavigator({
  page1: {
    screen: page1,
    navigationOptions: {
      tabBarLabel: 'Main',
      tabBarIcon: ({tintColor}) => (
        <Image source={require('./Image/launch-icon.png')}
               style={[styles.icon, {tintColor: tintColor}]}
        />)
    }
  },
  page2: {
    screen: page2,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({tintColor}) => (
        <Image
          source={require('./Image/launch-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />)
    }
  }
}, {
  animationEnabled: false, // 切换页面时是否有动画效果
  tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
  swipeEnabled: false, // 是否可以左右滑动切换tab
  backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
   tabBarOptions: {
     activeTintColor: '#ff8500', // 文字和图片选中颜色
     inactiveTintColor: '#999', // 文字和图片未选中颜色
     //showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {
      height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    style: {
      backgroundColor: '#fff', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 10, // 文字大小
    }
   }
});
const _StackNavigator = StackNavigator({
  _TabNavigator: {screen: _TabNavigator},
  page3: {screen: page3}
});

export default _StackNavigator
