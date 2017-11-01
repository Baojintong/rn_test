import { StackNavigator,DrawerNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import TestScreen from '../Modules/Test/Containers/Home'
import LoginScreen from '../Modules/Test/Containers/Login'
import HelloScreen from '../Modules/Test/Containers/HELLO'
import RegisterScreen from '../Modules/Test/Containers/Register'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const _DrawerNavigator = DrawerNavigator({
  HelloScreen: { screen: HelloScreen }
}, {
  drawerWidth: 200, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
  contentOptions: {
    initialRouteName: HelloScreen, // 默认页面组件
    activeTintColor: 'white',  // 选中文字颜色
    activeBackgroundColor: '#ff8500', // 选中背景颜色
    inactiveTintColor: '#666',  // 未选中文字颜色
    inactiveBackgroundColor: '#fff', // 未选中背景颜色
    style: {  // 样式

    }
  }
});
const PrimaryNav = StackNavigator({
  TestScreen: { screen: TestScreen },
  LoginScreen: { screen: LoginScreen },
  RegisterScreen: { screen: RegisterScreen },
  _DrawerNavigator:{
    screen: _DrawerNavigator,
    navigationOptions: {
      header: null//隐藏导航页的头部
    }
  }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerBackTitle:null,
    headerTintColor:'#333333',
    showIcon:true,
    swipeEnabled:false,
    animationEnabled:false
  }
})

export default PrimaryNav
