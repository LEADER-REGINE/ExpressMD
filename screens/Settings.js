import * as React from 'react';
import { Text, View, Image } from 'react-native';

export default class Settings extends React.Component {
    render() {
        return (
            <View
                style={{
                    flexDirection: "column"
                }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <Image style={{
                        resizeMode: 'contain',
                        width:150,
                        height: 200,
                        
                    }}
                        source={require('../assets/icons/avatar.png')}
                    />
                    <Text style={{
                        fontSize: 25,
                    }}>Put Name Here</Text>
                </View>

            </View>
        );
    }
}