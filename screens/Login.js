import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
//formik
import { Formik } from 'formik'
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledBotton,
    ButtonText,
    StyledCreateBotton
} from '../components/styles'
import { View } from 'react-native'
//icons
import { Octicons, Ionicons } from '@expo/vector-icons';

const { brand, darklight } = Colors;

const Login = () => {

    const [hidePassword, setHidePassword] = useState(true);


    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer style={{
                
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.5,
            }}>
                <PageLogo resizeMode="cover" source={require('../assets/Untitled-1.png')} style={{
                    
                }} />
                <PageTitle>Find Doctor Easier</PageTitle>
                <SubTitle style={{
                    marginTop: 40,
                }}>Account Login</SubTitle>

                <Formik
                    initialValues={{ email: "", password: "", }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >{({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
                    <MyTextInput
                        label="Email Address"
                        icon="mail"
                        placeholder="Example@gmail.com"
                        placeholderTextColor={darklight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardtype="email-address"
                    />

                    <MyTextInput
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * * * * "
                        placeholderTextColor={darklight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <StyledBotton style={{
                        marginTop: 100,
                    }}>
                        <ButtonText>
                            Login
                        </ButtonText>
                    </StyledBotton>

                </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darklight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;