import React, {Component} from 'react';
import {View, SafeAreaView, 
    StyleSheet,Text, 
    StatusBar, Image, TextInput,
    TouchableOpacity,ToastAndroid,TouchableNativeFeedback,
    ActivityIndicator,
    ProgressBar,
    SafeAreaViewBase
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
class LoginComponent extends Component{

    constructor(){
        super();
        this.state = {
            isPasword: true,
            swap_page:false,
            isLoadSplash:false,
            choose_screen:true,
            passwordIcon: 'eye-off-outline',
            users:{
                username:'john'
            
        }}

        this.handleScreen()

    
    }

    handleScreen(){
        setTimeout(()=>{
            this.setState({
                isLoadSplash:true
            })
            setTimeout(()=>{
                this.setState({
                    isLoadSplash:false,
                    choose_screen:false
                })
    
                
            },200)

        },200)
    }

    viewPassword(){
        if(this.state.isPasword == true){
            this.setState({
                isPasword:false,
                passwordIcon: 'eye-outline'
            })
            this.el_text.blur()
        }else{
            this.setState({
                isPasword:true,
                passwordIcon: 'eye-off-outline'
            })
            this.el_text.blur()

        }
    }

    Login_user(){
        this.setState({
            swap_page:true
        })
    }
    render(){

        const shoopingMobile = (
            <SafeAreaView style={{padding:0,flex:1,flexDirection:'column',backgroundColor:'white'}}>
                <View style={{
                flex:0.2,
                backgroundColor:'#ffc13b',
               
                shadowOffset:{width:0,height:2},
                shadowColor:'#ddd',
                shadowOpacity:10,
                elevation:3
            }}>

                <View style={{flexDirection:'row',padding:20}}>

                    <Image style={{width:50,height:50,borderRadius:100}} source={require('./Avatar.png')} />
                    
                   <TouchableNativeFeedback onPress={()=>this.props.navigation.navigate('search')}>
                   <View style={{
                    width:150,height:40,
                    backgroundColor:'white',borderRadius:10,
                    marginTop:5,marginLeft:20,
                    padding:7,
                    flexDirection:'row'
                }}>
                    <Icon color='#ffc13b' name='search-outline' size={20} />
                    <Text style={{color:'#ffc13b'}}>Search foods</Text>
                </View>
                    </TouchableNativeFeedback>

                <View style={{width:50,height:50,backgroundColor:'white',
                marginLeft:10,padding:13,borderRadius:100}}>
                <Icon size={20} color='black' name='cart-outline' />
                <View style={{width:25,height:25,borderRadius:100,backgroundColor:'black',position:'absolute',marginLeft:37}}>
                
                <Text style={{textAlign:'center',position:'absolute',color:'white',marginLeft:8}}>0</Text>
                </View>
                </View>
                </View>
                
            </View>

            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
                
               height:30,   
               marginTop:20             
                
            }}>
            

                


                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/bread.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>


                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/buns.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>

                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/hotdog.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/ice.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/indomie.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/pizza.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/dougnuts.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/cookie.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/chicken.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/juice.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>
                <View style={{
                    width:130,
                    height:170,
                    backgroundColor:'white',
                    shadowColor:'#ddd',
                    shadowOffset:{width:0,height:2},
                    shadowOpacity:0.5,
                    shadowRadius:10,
                    elevation:4,
                    borderRadius:10,
                    marginLeft:10
                    
                }}>
                    <Image style={{padding:10,width:130,height:100,borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./images/pick.png')} />
                <Icon style={{position:'absolute', marginLeft:90,marginTop:5,borderRadius:10,backgroundColor:'#f3ca20'}} size={30} color='black' name='heart-outline' />
               
                </View>


              

                


                




            
            </ScrollView>
            </SafeAreaView>
        )

        const splash_screen = (
            <View style={{
                backgroundColor:'white',
                flex:1,
                padding:100
            }}>
                <StatusBar hidden={true}/>
                <ActivityIndicator animating={this.state.isLoadSplash} size='large' color='#f3ca20' />
                <Image style={{
                width:120,height:100
            }} source={require('./app_logo.png')} />
            </View>
        )


        const login_page = (

            <SafeAreaView style={Login_design.layout}>
                <StatusBar hidden={true}/>
                <View style={Login_design.form_component_top}>
                    <View style={{flexDirection:'row',
                     justifyContent:'space-evenly',
                     paddingTop:50,
                     flex:1
                     
                     
                     }}>
                         
                        <Icon style={{marginLeft:-5}} name='arrow-back-outline' size={25}>
                            <Text style={{fontSize:20,fontWeight:'100',color:'#322514'}}>back</Text>
                        </Icon>
                        <Text  style={{fontSize:20, fontWeight:'bold',marginLeft:170, color:'#322514'}}>Login</Text>

                        </View>
                </View>

                <View style={Login_design.form_component}>
                    <View style={{marginTop:-35}}>
                        <Image style={Login_design.img_avatar} source={require('./Avatar.png')} />
                    </View>

                    <View style={{flexDirection:'column',marginTop:50,position:'absolute'}}>
                        <Text style={{
                            textAlign:'center',
                            fontSize:25,
                            fontWeight:'bold'
                        }}>Welcome!</Text>
                        <View style={{
                            flexDirection:'column',
                            marginTop:20,
                            
                    
                            
                        }}>
                            <Text style={{fontStyle:'normal',color:'gray',fontSize:18}}>Username</Text>

                        <TextInput style={{
                            height:30,
                            width:200,
                            borderBottomWidth:2,
                            borderColor:'#ffc13b',
                            color:'#f3ca20',
                            fontSize:18,
                            marginTop:5

                            }} placeholderTextColor='#f3ca20' />


                            </View>


                            <View style={{
                            flexDirection:'column',
                            marginTop:20
                            
                        }}>
                            <Text style={{fontStyle:'normal',color:'gray',fontSize:18}}>Password</Text>

                        <TextInput 
                        ref={(el)=> this.el_text = el}
                        secureTextEntry={this.state.isPasword}
                        style={{
                            height:30,
                            width:200,
                            borderBottomWidth:2,
                            borderColor:'#ffc13b',
                            color:'#f3ca20',
                            fontSize:18,
                            marginTop:5,
                            

                            }} placeholderTextColor='#f3ca20' />
                            <Icon 
                            onPress={this.viewPassword.bind(this)}
                            name={this.state.passwordIcon} 
                            color='#ffc13b'
                            size={22}
                            style={{
                                position:'absolute',
                                marginLeft:170,
                                marginTop:27,
                                fontWeight:'bold'
                                
                            }}
                            />

                            </View>

                            <View style={{
                                marginTop:30,
                            }}>

                                <TouchableNativeFeedback onPress={this.Login_user.bind(this)}>
                                <View  style={{width:200,
                                    position:'absolute',
                                    backgroundColor:'#ffc13b',
                                    borderRadius:10,
                                    shadowColor:'#ddd',
                                    shadowOffset:{width:0,height:2},
                                    shadowOpacity:0.5,
                                    shadowRadius:10,
                                    elevation:3,
                                    padding:15
                                    }}>

                                        <Text style={{fontSize:20,textAlign:'center',color:'#322514'}}>
                                            Login
                                        </Text>

                                </View>
                            </TouchableNativeFeedback>

                                </View>


                    </View>

                </View>

                
            </SafeAreaView>
        )
        const app_ui = ( (this.state.swap_page)?  shoopingMobile:login_page)

        


        return(
            (this.state.choose_screen)? splash_screen: app_ui
        );
    }
}

const Login_design = StyleSheet.create({
    layout:{
        flex:1,
        backgroundColor:'#f3ca20'
    },
    form_component_top:{
        flex:0.3,
        backgroundColor:'#f3ca20'
    },
    form_component:{
        flex:1,
        backgroundColor:'white',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        justifyContent:"center",
        flexDirection:'row',
        
    },
    img_avatar:{
        width:60,
        height:60,
        borderRadius:100
    }
})

export default LoginComponent;