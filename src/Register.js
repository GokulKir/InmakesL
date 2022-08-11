
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
export default class Register  extends Component{
    constructor(){
        super();
        this.state={
       name: null
        }
    }
    updateData(username){
  console.log(username)
  this.setState({name:username})
    }
    render(){
        return(
            <View style = {styles.container}>
                 <ImageBackground  style = {{width:'100%',height:'75%',alignItems:'center',justifyContent:'center'}} source = {require('../assets/Image.jpg')} >
                   <Image  style = {{ marginBottom:150, width:250,  }} source = {require('../assets/Inm.jpg')}>
  

                   </Image>
                   <Text style = {styles.TextLook}>Enter Your mobile number</Text>
                   <Text style ={{marginBottom:10}}>We will send you an OTP to verify.</Text>
                 
                </ImageBackground>
                <ScrollView style = {styles.container1} >
                    <View style = {{flexDirection:'row'}}>
                        <TextInput style = {{width:55,height:52,backgroundColor:'#3b5f63',marginTop:40,marginLeft:46,borderRadius:12,color:'white'}} placeholder = '  +91' placeholderTextColor= 'white'>  +91</TextInput>
                        <TextInput onChangeText= {(username)=> this.updateData(username)} style = {{width:250,height:52,backgroundColor:'#3b5f63',marginTop:40,marginLeft:6,borderRadius:12,color:'white'}} placeholder = '   Mobile number' placeholderTextColor= 'grey' maxLength={10}></TextInput>
                            
                    </View>
                    <View>
                    <TouchableHighlight onPress = {()=> this.props.navigation.navigate('OTP',{username: this.state.name})} style = {styles.ButtonStyle}  underlayColor = 'green' >
                        <Text style = {{fontSize:15,fontWeight:'bold',color:'#ffffff'}}>Continue</Text>
                    </TouchableHighlight>
                    </View>
                    


</ScrollView>

                </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    TextLook:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        marginBottom:5
        },
        container1:{
            backgroundColor:'#032142',
            width:'100%',
            height:40,
            borderTopLeftRadius: 15, 
            borderTopRightRadius: 15,
            marginTpo:10,
            elevation: 5
         
        
        },
        ButtonStyle:{
            marginTop:20,
            marginLeft:48,
            width:310,
            height:55,
            backgroundColor:'#18c94a',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:9
        }
})