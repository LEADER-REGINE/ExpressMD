import * as React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';
import ViewDocScreen from './ViewDoc'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ButtonCheck, ButtonText, ImageButton, ImageHead, LabelServices, StyledButton, View1, View2, ViewContainer, ViewHeader, ViewInner, ViewRequest } from '../components/homeStyle';



function HomeScreen() {

    const navigation = useNavigation();
    return (
        <View1>
            <View>
                <ViewHeader>
                    <View>
                        <ButtonCheck>
                            <ButtonText>
                                "Request a home visit now"
                            </ButtonText>
                        </ButtonCheck>
                    </View>
                    <View>
                        <ImageHead source={require('../assets/icons/doc.png')} />
                    </View>
                </ViewHeader>
            </View>
            <LabelServices>Services</LabelServices>

            <ViewContainer>
                <ViewInner>
                    <StyledButton activeOpacity={0.5} onPress={() => navigation.navigate("ViewDocScreen", { type: 'General Doctor' })} style={{ backgroundColor: "rgba(101, 164, 218, 1)" }}>
                        <ImageButton
                            source={require('../assets/icons/doc2.png')}
                        />

                        <Text > General Doctor </Text>
                    </StyledButton>
                    <StyledButton activeOpacity={0.5} onPress={() => navigation.navigate("ViewDocScreen", { type: 'Pediatrics' })} style={{ backgroundColor: "rgba(255, 193, 7, 1)", }}>
                        <ImageButton
                            source={require('../assets/icons/child.png')}
                        />
                        <Text > Pediatrics </Text>
                    </StyledButton>
                </ViewInner>
                <ViewInner>

                    <StyledButton activeOpacity={0.5} style={{ backgroundColor: "rgba(255, 89, 86, 1)" }}>
                        <Text > Service3 </Text>
                    </StyledButton>
                    <StyledButton activeOpacity={0.5} style={{ backgroundColor: "yellow" }}>
                        <Text > Service4 </Text>
                    </StyledButton>
                </ViewInner>
            </ViewContainer>
        </View1>
    );
}


const Stack = createNativeStackNavigator();

function Home() {

    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ViewDocScreen" component={ViewDocScreen} />
        </Stack.Navigator>
    );
}

export default Home;