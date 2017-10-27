import {Colors, Fonts, Metrics} from '../../../../Themes';
import {StyleSheet ,PixelRatio,Dimensions} from 'react-native'
export default StyleSheet.create({
  container: {
    margin: Metrics.navBarHeight,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection:'column'
  },
  inputText: {
    width:Dimensions.get('window').width/2
  },
  ListView: {
    width:Dimensions.get('window').width
  }
})
