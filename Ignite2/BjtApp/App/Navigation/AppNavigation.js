import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import TestScreen from '../Modules/Test/Containers/Home'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  TestScreen: { screen: TestScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TestScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
