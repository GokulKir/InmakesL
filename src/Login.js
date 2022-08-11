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

import {Picker} from '@react-native-picker/picker';

export default class Login extends Component{
  state ={user: ''}
  updateUser =(user) =>{
    this.setState({user: user})
  }

    render(){
      
        return(

            <View style ={styles.container}>
 <ImageBackground style = {{width:'100%',height:'100%',alignItems:'center'}} source = {require('../assets/Image.jpg')}>
 <Image style = {{marginBottom:4}} source = {require('../assets/Inm.jpg')}></Image>

 <Image style = {{borderRadius:40,marginBottom:0,width:350,height:100}} source = {require('../assets/In.png')}></Image>
 
 

 <Text style = {{fontSize:18,marginTop:5,fontSize:23,fontWeight:'bold',color:'black',}}>Student details</Text>
 <ScrollView style = {styles.container3}>
    <View style = {{alignItems:'center'}}>
 <TextInput  style = {{width:330,height:52,backgroundColor:'#3b5f63',marginTop:15,marginLeft:6,borderRadius:10,color:'white'}} placeholder = '   Full name' placeholderTextColor= 'grey' maxLength={20}></TextInput>
 <TextInput  style = {{width:330,height:52,backgroundColor:'#3b5f63',marginTop:20,marginLeft:6,borderRadius:10,color:'white'}} placeholder = '   Email' placeholderTextColor= 'grey' maxLength={30}></TextInput>

 <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}  style = {{width:330,height:52,backgroundColor:'#3b5f63',marginTop:15,marginLeft:6,borderRadius:10,color:'white'}}>
 <Picker.Item  label="Select state"  value="Select state" />
 <Picker.Item  label="Kerala"  value="Kerala" />
 <Picker.Item label="Thamizhnadu" value="Thamizhnadu" />
 <Picker.Item label="Andrapradesh" value="Andrapradesh" />
 <Picker.Item label="JemmuKashmeer" value="JemmuKashmeer" />
 </Picker>

 <TextInput  style = {{width:330,height:52,backgroundColor:'#3b5f63',marginTop:20,marginLeft:6,borderRadius:10,color:'white'}} placeholder = '   Pin code' placeholderTextColor= 'grey' maxLength={10} 
  ></TextInput>
  </View>
  <TouchableHighlight underlayColor ='green' onPress={()=> this.props.navigation.navigate('Signup')} style = {styles.ButtonStyle1}>
                <Text  style = {{fontSize:15,fontWeight:'bold',color:'#ffffff'}}>Register</Text>
            </TouchableHighlight>


</ScrollView>

    </ImageBackground>
  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    container3:{
        backgroundColor:'#032142',
        width:'100%',
        height:36,
        borderTopLeftRadius: 15, 
        borderTopRightRadius: 15,
        marginTop:20,
        elevation: 5

     
    
    },
    ButtonStyle1:{
        marginTop:19,
        marginLeft:40,
        width:320,
        height:55,
        backgroundColor:'#18c94a',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:9
    },
})
