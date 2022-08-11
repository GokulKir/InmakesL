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



export default class Signup extends Component{
    state ={user: ''}
updateUser =(user) =>{
  this.setState({user: user})
}
 
    render(){
        return(
            <View style ={styles.container}>
          <ImageBackground style = {{width:'100%',height:'100%',alignItems:'center'}} source = {require('../assets/Image.jpg')}>
          <Image style = {{marginBottom:4}} source = {require('../assets/Inm.jpg')}></Image>
          <Image style = {{borderRadius:40,marginBottom:0,width:350,height:100}} source = {require('../assets/Mo.png')}></Image>
          <Text style = {{fontSize:18,marginTop:30,fontSize:21,fontWeight:'bold',color:'black',}}>Select you school board</Text>          
          <ScrollView style = {styles.container3}>
          <View style = {{alignItems:'center'}}>
          <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}  style = {{width:330,height:52,backgroundColor:'#3b5f63',marginTop:45,marginLeft:6,borderRadius:10,color:'white'}}>
          <Picker.Item value="Select board" label="Select board" />
          <Picker.Item value="MG UNIVERSITY" label="MG UNIVERSITY" />
          <Picker.Item value="CALICUT UNIVERSITY" label="CALICUT UNIVERSITY" />
          <Picker.Item value="DIPLOMA" label="DIPLOMA" />
          <Picker.Item value="HIGHER SECONDARY" label="HIGHER SECONDARY" />
            </Picker>
          <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}  style = {{width:330,height:52,backgroundColor:'#3b5f63',marginTop:45,marginLeft:6,borderRadius:10,color:'white'}}>
          <Picker.Item value="Select class" label="Select class" />
          <Picker.Item value="BCA" label="BCA" />
          <Picker.Item value="MCA" label="MCA" />
          <Picker.Item value="Btech" label="Btech" />
          <Picker.Item value="Plus Two" label="Plus Two" />
            </Picker>
            </View>
            <TouchableHighlight underlayColor ='green' onPress={()=> this.props.navigation.navigate('Entry')} style = {styles.ButtonStyle1}>
                <Text  style = {{fontSize:15,fontWeight:'bold',color:'#ffffff'}}>Continue</Text>
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
        marginTop:40,
        elevation: 5

     
    
    },
    ButtonStyle1:{
        marginTop:28,
        marginLeft:40,
        width:320,
        height:55,
        backgroundColor:'#18c94a',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:9
    },
})