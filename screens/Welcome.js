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
    StyledCreateBotton,
    LoginButton,
} from '../components/styles'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login.js'
import RegisterScreen from './Signup'
function GoToButton({ screenName }) {
    const navigation = useNavigation();

    return (
        <ButtonText onPress={() => navigation.navigate(screenName)} >
        </ButtonText>
    );
}

function WelcomeScreen() {
    const navigation = useNavigation();

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
                        <StyledBotton onPress={() => navigation.navigate("LoginScreen")}>
                            <ButtonText>Login</ButtonText>
                        </StyledBotton>
                        <StyledCreateBotton onPress={() => navigation.navigate("RegisterScreen")}>
                            <ButtonText>Create an Account</ButtonText>
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
        <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
}



export default Welcome;