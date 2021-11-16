import * as React from 'react';
import { Text, Image, Button, TouchableOpacity } from 'react-native';
import { View } from 'styled-components/native'
export default class Home extends React.Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: "column",
                    height: 600,
                }}
            >
                <View style={{
                    backgroundColor: "rgba(22, 194, 213, 1)",
                    elevation: 6,
                    flex: 0.5,
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 3,
                }} >

                    <Image style={{
                        height: 175,
                        resizeMode: 'contain',
                        marginTop: 30,
                        marginLeft: 10,
                        flex: 0.3
                    }}
                        source={require('../assets/icons/doc.png')}
                    />
                    <View
                        style={{
                            flexDirection: "column",
                            flex: 0.5,
                            alignItems: "center"
                        }}
                    >
                        <Text style={{
                            color: "white", fontSize: 20, paddingLeft: 55, textAlign: 'center',
                            fontWeight: 'bold',
                            marginTop: 0,
                            flex: 0.3
                        }} >Request a visit now.</Text>
                        <Button title="Check it out" style={{
                            justifyContent: 'space-between',
                        }} />
                    </View>

                </View>
                <Text style={{
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    fontSize: 30,
                    marginTop: 10,
                    marginLeft: 10,
                }}>Services</Text>

                <View style={{
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 0.5,
                    marginTop: 50,

                }}>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            backgroundColor: "rgba(101, 164, 218, 1)",
                            margin: 5,
                            width: 150,
                            height: 150,
                            alignItems: 'center',
                            borderRadius: 15,
                            elevation: 6,
                        }}>
                            <Image style={{
                                resizeMode: 'contain',
                                height: 64,
                                width: 64,
                                marginTop: 30,
                            }}
                                source={require('../assets/icons/doc2.png')}
                            />

                            <Text > General Doctor </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            backgroundColor: "rgba(255, 193, 7, 1)",
                            margin: 5,
                            width: 150,
                            height: 150,
                            alignItems: 'center',
                            borderRadius: 15,
                            elevation: 6,
                        }}>

                            <Image style={{
                                resizeMode: 'contain',
                                height: 64,
                                width: 64,
                                marginTop: 30,
                            }}
                                source={require('../assets/icons/child.png')}
                            />
                            <Text > Pediatrics </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: "row",
                    }}>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            backgroundColor: "rgba(255, 89, 86, 1)",
                            margin: 5,
                            width: 150,
                            height: 150,
                            alignItems: 'center',
                            borderRadius: 15,
                            elevation: 6,
                        }}>


                            <Text > Service3 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{
                            backgroundColor: "yellow",
                            margin: 5,
                            width: 150,
                            height: 150,
                            alignItems: 'center',
                            borderRadius: 15,
                            elevation: 6,
                        }}>
                            <Text > Service4 </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}