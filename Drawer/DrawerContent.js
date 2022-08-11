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

export default class DrawerContent extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.container1}>
                <View style = {{backgroundColor:'#fff',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30,fontSize:19,paddingLeft:8,color:'#6beb10'}}>X</Text>
                </View>
                    
                  <View style ={{backgroundColor:'green',width:74,height:74,marginTop:80,marginLeft:25,borderRadius:100,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                    <Image  style ={{width:74,height:74,borderRadius:70}} source={require('../assets/Im.png')}/>
                  
                  </View>
                  <Text style ={{marginLeft:15,marginTop:100,color:'violet',fontSize:18,}}>INMAKES</Text>
                  <Text style ={{marginLeft:15,marginTop:100,color:'#fff',fontSize:18,height:57}}>></Text>
                  

                </View>
               <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'green',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.DrawerLetter}>Exam corner</Text>
              </View>
              <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'green',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.DrawerLetter}>Subcription</Text>
              </View>
              <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'green',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.DrawerLetter}>Analytics</Text>
              </View>
              <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'green',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.DrawerLetter}>Downloads</Text>
              </View>
              <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'green',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.DrawerLetter}>Notifications</Text>
              </View>
              <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'green',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.DrawerLetter}>Referrals</Text>
              </View>
              <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'green',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.DrawerLetter}>share app</Text>
              </View>
             
              <View style ={{flexDirection:'row'}}>
                <View style = {{backgroundColor:'red',width:38,height:35,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:31,height:30}}></Text>
                </View>
              <Text style = {styles.LogoutText}>Logout</Text>
              </View>
              <View style = {{backgroundColor:'green',width:240,height:45,marginTop:27,marginLeft:10,alignItems:'center',justifyContent:'center',borderRadius:5}}>
                    <Text style={{backgroundColor:'#083661',width:231,height:40,fontSize:16,color:'#fff',paddingLeft:63,paddingTop:8}}>Enquire now</Text>
                </View>
            
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#083661'
    },
    DrawerLetter:{
        fontSize:18,
        color:'#ffffff',
        marginLeft:20,
        marginTop:30,
        borderBottomColor: "grey", 
        borderBottomWidth: StyleSheet.hairlineWidth, 
        alignSelf:'stretch',
        width: 210,
        height:38
    },
    LogoutText:{
        fontSize:18,
        color:'red',
        marginLeft:20,
        marginTop:30,
    },
    container1:{
        backgroundColor:"#083661",
        width:279,
        height:150,
        flexDirection:'row'
    }
})
