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
export default class Profile extends Component{
    render(){
        return(
     
 <ScrollView style={styles.container}>
<View style={{width:396,height:257,backgroundColor:'#083661',}}>
    <View style={{flexDirection:'row'}}>
<Text style={{fontSize:22,color:'#fff',marginTop:30,marginBottum:30,fontWeight:'bold',marginLeft:156}}>Profile</Text>
<Icon style={{marginTop:30,marginLeft:40}} name="public" size={24} color="#fff"/>
<Icon style ={{marginTop:30,marginLeft:20,color:'white'}} name="home" size={25} />

</View>
<View style={{width:345,height:506,backgroundColor:'#fff',marginTop:47,marginLeft:24,borderRadius:9}}>
    <View style={{flexDirection:'row'}}>
   <Image style={{width:64,height:64,marginLeft:34,marginTop:45}} source={require('../assets/Im.png')}/>
   <Text style={{marginTop:65,marginLeft:13,fontSize:17,fontWeight:'bold'}}>Inmakes</Text>
   </View>
   <Text style={{marginLeft:24,marginTop:12,color:'black',fontWeight:'bold', borderBottomColor: 'grey',  borderBottomWidth: 1,}}>Personal info</Text>
</View>
    </View>
    <View style={{width:345,height:506,backgroundColor:'#fff',marginTop:47,marginLeft:24,borderRadius:9   }}>
   <View style={{flexDirection:'row'}}>
   <Text style={{marginBottom:23,marginLeft:23,color:'grey'}}>Account Settings :</Text>
   <Text style={{marginLeft:44,color:'black'}}>Inmakes</Text>

  </View>

  
 <View style={{flexDirection:'row'}}>
    <Text style={{marginLeft:23}}>Number :</Text>
    <Text style={{marginLeft:97,color:'black'}}>
      9995707639
    </Text>
 </View>
 <View style={{flexDirection:'row'}}>
    <Text style={{marginTop:45,color:'black',marginLeft:23,fontSize:18,fontWeight:'bold'}}>Course Info</Text>
    
 </View>
 <View style={{flexDirection:'row'}}>
    <Text style={{marginLeft:25,marginTop:40}}>Center :</Text>
    <Text style={{marginTop:40,marginLeft:104,color:'black'}}>Inmakes Edu</Text>
    
 </View>
 <View style={{flexDirection:'row'}}>
    <Text style={{marginLeft:25,marginTop:40}}>Course :</Text>
    <Text style={{marginTop:40,marginLeft:98,color:'black'}}>+2 Science</Text>
    
 </View>
 <View style={{flexDirection:'row'}}>
    <Text style={{marginLeft:25,marginTop:40}}>Payment Status :</Text>
    <Text style={{marginTop:40,marginLeft:46,color:'black'}}>Free</Text>
    
 </View>
 <View style={{flexDirection:'row'}}>
    <Text style={{marginLeft:25,marginTop:40}}>Expiry date :</Text>
    <Text style={{marginTop:40,marginLeft:76,color:'black'}}>Not applicable</Text>
    
 </View>
 <View style={{alignItems:'center'}}>
    <TouchableHighlight style={{width:296,height:58,backgroundColor:'green',marginTop:36,alignItems:'center',justifyContent:'center',borderRadius:10}}>
        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Custom Payment</Text>
    </TouchableHighlight>
 </View>
 <View style={{alignItems:'center'}}>
    <TouchableHighlight style={{width:296,height:58,backgroundColor:'green',marginTop:10,alignItems:'center',justifyContent:'center',borderRadius:10}}>
        <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Referrals</Text>
    </TouchableHighlight>
 </View>
    </View>
   

    </ScrollView>
    
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ced8d9'
    }
})