import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
//formik
import { Formik } from 'formik'
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    StyledBotton,
    ButtonText,
    SubTitle,
    StyledCreateBotton
} from '../components/styles'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login.js'

function GoToButton({ screenName }) {
    const navigation = useNavigation();

    return (
        <ButtonText onPress={() => navigation.navigate(screenName)} >
            Login
        </ButtonText>
    );
}

function WelcomeScreen() {


    return (
        <StyledContainer >
            <StatusBar style="dark" />
            <InnerContainer style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.5,
            }}>
                <PageLogo resizeMode="cover" source={require('../assets/Untitled-1.png')} />
                <PageTitle>Find Doctor Easier</PageTitle>
                <Formik>{() => (
                    <StyledFormArea>
                        <StyledBotton>
                            <GoToButton screenName="LoginScreen" />
                        </StyledBotton>
                        <StyledCreateBotton>
                            <ButtonText>
                                Create your account
                            </ButtonText>
                        </StyledCreateBotton>


                    </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const Stack = createNativeStackNavigator();

function Welcome() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default Welcome;