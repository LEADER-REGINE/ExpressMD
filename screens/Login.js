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
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledBotton,
    ButtonText,
    MsgBox,
    Line,
    LeftIcon
} from '../components/styles'
import { View } from 'react-native'
//icons
import { Octicons, Ionicons } from '@expo/vector-icons';
import Firebase from '../config/firebase';

const { brand, darklight } = Colors;
const auth = Firebase.auth();
const Login = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = async () => {
        try {
            if (email !== '' && password !== '') {
                await auth.signInWithEmailAndPassword(email, password);
            }
        } catch (error) {
            setLoginError(error.message);
        }
    };
    return (

        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer style={{

                justifyContent: 'center',
                alignItems: 'center',
                flex: 0.5,
            }}>
                <SubTitle style={{
                    marginTop: 10,
                    marginBottom: 100,
                }}>Login</SubTitle>

                <Formik
                    initialValues={{ email: "", password: "", }}

                ><StyledFormArea>
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="Example@gmail.com"
                            placeholderTextColor={darklight}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            keyboardtype="email-address"
                        />
                        <Line />

                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * * "
                            placeholderTextColor={darklight}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <Line />

                        <StyledBotton style={{
                            marginTop: 100,
                        }} onPress={onLogin}>
                            <ButtonText >
                                Login
                            </ButtonText>
                        </StyledBotton>

                        <MsgBox style={{ marginTop: 20 }}>Forgot Password ?</MsgBox>
                        <MsgBox style={{ marginTop: 20 }}>Don't have an account ? </MsgBox>
                        <MsgBox style={{ marginTop: 10, color: "blue" }}>Create Account</MsgBox>

                    </StyledFormArea>

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