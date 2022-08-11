import React,{Component} from "react";
import{
    View,
    ImageBackground,
      Text,
      StyleSheet,
      Image,
      ScrollView,
      TextInput,
      TouchableHighlight,
      FlatList,
     StatusBar,
    
}from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
const slides = [
  {
    key: 'one',
    title: 'WELCOME',
    text: 'Learn new skills with top \n educators Inmakes learning hub',
    image: require('../assets/I.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Inmakes Learning Hub',
    text: 'Self learning platform',
    image: require('../assets/Mul.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Learning',
    text: 'One of the best learning platform',
    image: require('../assets/Online.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'Fore',
    title: 'Get Start!!',
    text: 'What is looking Go To Home',
    image: require('../assets/Join.png'),
    backgroundColor: '#22bcb5',
 
  },



];

export default class Entry extends Component{
    _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style = {styles.image} source={item.image} />
            <Text style={styles.text} >{item.text}</Text>
          
          </View>
   
        );
      }
      _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
      }
      _renderNextButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon style = {{backgroundColor:'#7811ed',borderRadius:9}}
              name="keyboard-arrow-right"
              color="rgba(255, 255, 255, .9)"
              size={44}
            />
          </View>
        );
      };
      _renderDoneButton = () => {
        return (
          <View style={styles.buttonCircle}>
            <Icon  onPress={()=> this.props.navigation.navigate('Tab')}   style = {{backgroundColor:'#af13ed',borderRadius:10}}
              name="check"
              color="rgba(255, 255, 255, .9)"
              size={44}
            />
          </View>
        );
      };
      render(){
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}  renderDoneButton={this._renderDoneButton}         renderNextButton={this._renderNextButton}
        />;
      }
    }

    const styles = StyleSheet.create({
        slide: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#18c94a',
        },
        image: {
          width: 320,
          height: 320,
          marginVertical: 32,
          borderRadius:10
        },
        text: {
          color: 'rgba(255, 255, 255, 0.8)',
          textAlign: 'center',
          fontWeight:'bold',
          color:'#fff'
        },
        title: {
          fontSize: 22,
          color: 'white',
          textAlign: 'center',
          fontWeight:'bold',
          color:'#fff'
        },
       
})