import React,{Component} from "react";
import{
    View,
    ImageBackground,
      Text,
      StyleSheet,
      Image,
      ScrollView,
      TextInput,
      TouchableHighlight
}from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default class Home extends Component{
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
    render(){
        return(
            <ScrollView style ={styles.container}>
           <View style ={{backgroundColor:'#fff',width:393,height:95,flexDirection:'row'}}>
            <TouchableHighlight style ={{backgroundColor:'grey',width:36,height:37,marginLeft:35,marginTop:35,borderColor:'black',borderSize:5}}>
                <Icon style ={{marginTop:5,marginLeft:5,color:'green'}} name="chevron-left" size={25} />

            </TouchableHighlight>
            <ImageBackground style = {{width:144,height:67,marginTop:20,marginLeft:10}} source={require('../assets/Inm.jpg')}>

            </ImageBackground>
            <View style ={{backgroundColor:'green',width:92,height:39,marginLeft:40,marginTop:30,backgroundColor:'green',width:92,height:39,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:9}}>
                <View style={{backgroundColor:'#fff',width:85,height:34,flexDirection:'row',borderRadius:5}}>
                    <Text style = {{backgroundColor:'green',width:22,height:20,marginLeft:3,marginTop:5,borderRadius:56,flexDirection:'row'}}></Text>
                    <Text style={{marginLeft:4,marginTop:5,color:'green'}}>Classes</Text>
                 
                </View>
             </View>
            </View>
            <View style = {{borderBottomColor: 'grey',  borderBottomWidth: 1,}}>

</View>
<View>
    <Text style ={{marginTop:40,marginLeft:20,fontSize:16,color:'black'}}>Goodmorning</Text>
    <Text style ={{marginTop:10,marginLeft:20,fontSize:24,color:'black',fontWeight:'bold'}}>Inmakes Learning Hub</Text>
</View> 
            <View style ={{backgroundColor:'#083661',width:300,height:70,marginTop:30,marginLeft:20,borderRadius:5}}>
                        <Text style={{color:'grey',marginTop:10,marginLeft:28,fontSize:15}}>Class</Text>
                        <Text style={{color:'#fff',marginTop:4,marginLeft:28,fontSize:18}}>Plus two science</Text>
                        



            </View>
            <View style = {{flexDirection:'row'}}>
            <View style ={{backgroundColor:'green',width:92,height:39,marginLeft:10,marginTop:30,backgroundColor:'green',width:92,height:39,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:9}}>
                <View style={{backgroundColor:'#fff',width:85,height:34,flexDirection:'row',borderRadius:5}}>
                    <Text style = {{backgroundColor:'green',width:22,height:20,marginLeft:3,marginTop:5,borderRadius:56,flexDirection:'row'}}></Text>
                    <Text  onPress={()=> this.props.navigation.navigate('Biology')} style={{marginLeft:4,marginTop:5,color:'green'}}>Biology</Text>
                 
                </View>
             </View>

             <View style ={{backgroundColor:'green',width:92,height:39,marginLeft:10,marginTop:30,backgroundColor:'green',width:92,height:39,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:9}}>
                <View style={{backgroundColor:'#fff',width:85,height:34,flexDirection:'row',borderRadius:5}}>
                    <Text style = {{backgroundColor:'green',width:22,height:20,marginLeft:3,marginTop:5,borderRadius:56,flexDirection:'row'}}></Text>
                    <Text style={{marginLeft:4,marginTop:5,color:'green'}}>Physics</Text>
                 
                </View>
             </View>

             <View style ={{backgroundColor:'green',width:92,height:39,marginLeft:10,marginTop:30,backgroundColor:'green',width:92,height:39,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:9}}>
                <View style={{backgroundColor:'#fff',width:85,height:34,flexDirection:'row',borderRadius:5}}>
                    <Text style = {{backgroundColor:'green',width:22,height:20,marginLeft:3,marginTop:5,borderRadius:56,flexDirection:'row'}}></Text>
                    <Text style={{marginLeft:4,marginTop:5,color:'green'}}>English</Text>
                 
                </View>
             </View>

             <View style ={{backgroundColor:'green',width:92,height:39,marginLeft:10,marginTop:30,backgroundColor:'green',width:92,height:39,flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:9}}>
                <View style={{backgroundColor:'#fff',width:85,height:34,flexDirection:'row',borderRadius:5}}>
                    <Text style = {{backgroundColor:'green',width:22,height:20,marginLeft:3,marginTop:5,borderRadius:56,flexDirection:'row'}}></Text>
                    <Text style={{marginLeft:4,marginTop:5,color:'green'}}>Maths</Text>
                 
                </View>
             </View>

         

            


</View>
<View>
    <Text style ={{marginLeft:14,marginTop:12}}>Resent courses</Text>
</View>


<View style={{flexDirection:'row'}}>
<ImageBackground style={{width:229,height:157,marginLeft:10,marginTop:20,flexDirection:'row'}} source={require('../assets/Bio.jpg')}>
<Icon style={{color:'#fff',marginLeft:10,marginTop:118}} name="video-library" size={24}/>
<Text style={{color:'#fff',marginTop:118,marginLeft:5}}>Cource Title</Text>
</ImageBackground>

<ImageBackground style={{width:229,height:157,marginLeft:10,marginTop:20,flexDirection:'row'}} source={require('../assets/Che.jpg')}>
<Icon style={{color:'#fff',marginLeft:10,marginTop:118}} name="video-library" size={24}/>
<Text style={{color:'#fff',marginTop:118,marginLeft:5}}>Cource Title</Text>
</ImageBackground>


</View>
<View style={{flexDirection:'row'}}>
<View style = {{backgroundColor:'#083661',width:234,height:345,marginTop:20,marginLeft:10,borderRadius:9,}}>

<Text style = {{backgroundColor:"#667e94",width:86,height:86,borderRadius:56,marginLeft:34,marginTop:16}}></Text>


<Text style={{color:'#fff',marginTop:12,marginLeft:25,fontSize:16,fontWeight:'bold'}}>Target live classes</Text>
<View>
    <TouchableHighlight style ={{backgroundColor:'#51fa1e',width:125,height:46,marginLeft:25,marginTop:115,justifyContent:'center',alignItems:'center',borderRadius:9}}>
        <Text style={{fontSize:14,color:'#ffffff',fontWeight:'bold'}}>Book a free Class</Text>
    </TouchableHighlight>
</View>
</View>



<View style = {{backgroundColor:'#083661',width:234,height:345,marginTop:20,marginLeft:10,borderRadius:9,}}>

<Text style = {{backgroundColor:"#667e94",width:86,height:86,borderRadius:56,marginLeft:34,marginTop:16}}></Text>


<Text style={{color:'#fff',marginTop:12,marginLeft:25,fontSize:16,fontWeight:'bold'}}>Target live classes</Text>
<View>
    <TouchableHighlight style ={{backgroundColor:'#51fa1e',width:125,height:46,marginLeft:25,marginTop:115,justifyContent:'center',alignItems:'center',borderRadius:9}}>
        <Text style={{fontSize:14,color:'#ffffff',fontWeight:'bold'}}>Book a free Class</Text>
    </TouchableHighlight>
</View>
</View>


</View>
         
          </ScrollView>
          
    
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})