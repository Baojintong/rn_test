import {Colors, Fonts, Metrics} from '../../../../Themes';
import {StyleSheet ,PixelRatio,Dimensions} from 'react-native'
export default StyleSheet.create({
  container: {
    margin: Metrics.navBarHeight,
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection:'column',
    alignSelf:'center'
  },
  inputText: {
    width:Dimensions.get('window').width/1.5
  },
  ListView: {
    width:Dimensions.get('window').width/1.5
  },
  imageStyle: {
    width:100,
    height:100
  },
  bookView:{
    width:Dimensions.get('window').width/1.5
  },
  headerText:{
    fontSize:20,
    alignSelf:'center',
    color:'red'
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:Dimensions.get('window').width/2,
    alignSelf:'center',
    margin: 30
  }
})
