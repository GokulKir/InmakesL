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

export default class Biology extends Component{
    render(){
        return(
            <ScrollView style={styles.container}>
                   <View style={{width:396,height:257,backgroundColor:'#083661'}}>
                  <View style={{width:38,height:38,backgroundColor:'#fff',marginLeft:23,marginTop:20,alignItems:'center',justifyContent:'center',borderRadius:9}}>
                    <View style={{width:36,height:36,backgroundColor:'#083661',borderRadius:9}}>
              <Icon onPress={()=> this.props.navigation.navigate('House')} name="chevron-left" size={35} color="green"/>
                    </View>

                  </View>
                  <Text style={{marginLeft:22,marginTop:55,color:'#fff',fontSize:26,fontWeight:'bold'}}>Biology</Text>
                  <View style={{flexDirection:'row'}}>
                 <Icon style={{marginLeft:16,marginTop:34}} name="circle" size={24} color="green" />
                 <Text style={{marginLeft:3,marginTop:36,fontSize:14,color:"green"}}>12 Chapter</Text>
                 <Icon style={{marginLeft:16,marginTop:34}} name="circle" size={24} color="green" />
                 <Text style={{marginLeft:3,marginTop:36,fontSize:14,color:"green"}}>124 hours</Text>
                   </View>
                   
                   <View style={{backgroundColor:'#fff',width:372,height:78,marginTop:20,marginLeft:12,borderRadius:9}}>
                      <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Long Chapter name can be </Text>
                     
                   </View>
                   </View>
                   <View style={{backgroundColor:'#fff',width:372,height:78,marginLeft:12,borderRadius:9}}>
                   <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Shown here. </Text>
                   <View style={{flexDirection:'row'}}>
                  
                    <Icon style={{marginLeft:13,marginTop:13}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:14}} >Chapter 1</Text>
                    <Icon style={{marginLeft:13,marginTop:13}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:14}} >3 Parts</Text>






                   </View>
                  




                





</View>




  


<View style={{backgroundColor:'#fff',width:372,height:98,marginTop:20,marginLeft:12,borderRadius:9}}>

   <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Long Chapter name can be </Text>
     <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Shown here. </Text>
                     
              
<View style={{flexDirection:'row'}}>
                  
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >Chapter 1</Text>
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >3 Parts</Text>






                   </View>
                  
                    </View>




                    <View style={{backgroundColor:'#fff',width:372,height:98,marginTop:20,marginLeft:12,borderRadius:9}}>

   <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Long Chapter name can be </Text>
     <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Shown here. </Text>
                     
              
<View style={{flexDirection:'row'}}>
                  
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >Chapter 1</Text>
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >3 Parts</Text>






                   </View>
                  
                    </View>





                    <View style={{backgroundColor:'#fff',width:372,height:98,marginTop:20,marginLeft:12,borderRadius:9}}>

   <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Long Chapter name can be </Text>
     <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Shown here. </Text>
                     
              
<View style={{flexDirection:'row'}}>
                  
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >Chapter 1</Text>
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >3 Parts</Text>






                   </View>
                  
                    </View>





                    <View style={{backgroundColor:'#fff',width:372,height:98,marginTop:20,marginLeft:12,borderRadius:9}}>

   <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Long Chapter name can be </Text>
     <Text style={{fontSize:21,marginLeft:12,fontWeight:'bold',elevation:9}}>Shown here. </Text>
                     
              
<View style={{flexDirection:'row'}}>
                  
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >Chapter 1</Text>
                    <Icon style={{marginLeft:13,marginTop:8}} name="circle" size={24} />
                    <Text style={{marginLeft:10,marginTop:8}} >3 Parts</Text>






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