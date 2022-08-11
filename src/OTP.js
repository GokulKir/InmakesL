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
export default class OTP  extends Component{
    componentDidMount(){
        console.log(this.props.route.params.username)
    }
    render(){
        return(
            <View style = {styles.container}>
            <ImageBackground style = {{width:'100%',height:'100%',alignItems:'center'}} source = {require('../assets/Image.jpg')}>
              <Image style = {{marginBottom:10}} source = {require('../assets/Inm.jpg')}></Image>
              <Image style = {{borderRadius:100,marginBottom:20}} source = {require('../assets/Skill.png')}></Image>
        <View style = {{alignItems:'center'}}>
    <Text style = {styles.MiddleView}>Verification code</Text>
    <Text style ={{marginTop:5}}>Please Type the Verification code sent to</Text>
    <Text style ={{marginTop:7,color:'black',fontSize:17,fontWeight:'bold'}}>+91 {this.props.route.params.username}
    </Text>
        </View>
        <ScrollView style = {styles.container2}>
         <View style = {styles.StyleInput}>
         <TextInput style = {{width:55,height:52,backgroundColor:'#3b5f63',marginTop:40,marginLeft:40,borderRadius:12,color:'white'}} maxLength = {1} > </TextInput>
         <TextInput style = {{width:55,height:52,backgroundColor:'#3b5f63',marginTop:40,marginLeft:10,borderRadius:12,color:'white'}} maxLength = {1}></TextInput>
         <TextInput style = {{width:55,height:52,backgroundColor:'#3b5f63',marginTop:40,marginLeft:10,borderRadius:12,color:'white'}} maxLength = {1}></TextInput>
         <TextInput style = {{width:55,height:52,backgroundColor:'#3b5f63',marginTop:40,marginLeft:10,borderRadius:12,color:'white'}} maxLength = {1}></TextInput>
         <TextInput style = {{width:55,height:52,backgroundColor:'#3b5f63',marginTop:40,marginLeft:10,borderRadius:12,color:'white'}} maxLength = {1} ></TextInput>

    
         </View>
         <View>
            <TouchableHighlight onPress = {()=> this.props.navigation.navigate('Login')} underlayColor='green' style = {styles.ButtonStyle1}>
                <Text  style = {{fontSize:15,fontWeight:'bold',color:'#ffffff'}}>Resend OTP</Text>
            </TouchableHighlight>

           <View style = {{alignItems:'center'}}>
            <Text style = {{color:'grey',fontSize:12,marginTop:4}}>Resend after 28s</Text>
        
            </View>
            <View style = {{flexDirection:'row',alignItems:'center'}}>
         <Icon style={{marginLeft:128,color:'green',marginTop:10}} name = 'call' size = {22}/>
         <Text style = {{fontSize:18,color:'green',marginLeft:5,marginTop:15}}>Contact Us</Text>
         
          </View>

           </View>
          
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
   
        container1:{
            backgroundColor:'#032142',
            width:'100%',
            height:40,
            borderTopLeftRadius: 15, 
            borderTopRightRadius: 15,
            marginTop:10,
            elevation: 5
         
        
        },
        container2:{
            backgroundColor:'#032142',
            width:'100%',
            height:40,
            borderTopLeftRadius: 15, 
            borderTopRightRadius: 15,
            marginTop:30,
            elevation: 5
    
         
        
        },
        StyleInput:{
            flexDirection:'row'
        },
        ButtonStyle1:{
            marginTop:20,
            marginLeft:48,
            width:310,
            height:55,
            backgroundColor:'#18c94a',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:9
        },
        MiddleView:{
            fontSize:20,
            fontWeight:'bold',
            color:'black'
        
        }
    })
    


