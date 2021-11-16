import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
//formik
import { Formik } from 'formik'
import {
    StyledContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledBotton,
    ButtonText,
    MsgBox,
    Line
} from '../components/styles'
import { View } from 'react-native'
//icons
import { Ionicons } from '@expo/vector-icons';

import { useNavigation, NavigationContainer } from '@react-navigation/native';
import Firebase from '../config/firebase';

const { brand, darklight } = Colors;
const auth = Firebase.auth();
const db = Firebase.firestore();


const Signup = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setconfirmPassword] = useState('');
    const [fullname, setfullname] = useState('');
    const [phoneNum, setphoneNum] = useState('');
    const [gender, setgender] = useState('');
    const [birthdate, setbirthdate] = useState('');
    const [profilePic, setprofilePic] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZNvTWjTSpH6CCYzLPxYkagOsGEZSrk5GMw&usqp=CAU');


    const userInput = (prop) => (e) => {
        setPayload({ ...payload, [prop]: e.target.value });
    };

    const onHandleSignup = async () => {
        try {
            if (email !== '' && password !== '' && password === confirmpassword) {
                await auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
                    var user = userCredential.user;
                    db.collection("users")
                        .doc(user.uid)
                        .set({
                            fullname: fullname,
                            email: email,
                            phoneNum: phoneNum,
                            gender: gender,
                            profilePic: profilePic,
                            uid: user.uid,
                        })
                        .then((docRef) => { })
                        .catch((error) => {
                            console.error("Error adding document: ", error);
                        });
                }
                );
            }
        } catch (error) {
            console.log(error.message);
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
                    marginTop: 50,
                    marginBottom: 20,
                }}>Create</SubTitle>

                <SubTitle style={{
                    marginTop: -25,
                    marginBottom: 20,
                }}>   Account</SubTitle>

                <Formik
                    initialValues={{ email: "", password: "", Fname: "", PhoneNumber: "", Gender: "", Birthday: "", confirmPassword: "" }}

                >
                    <StyledFormArea>

                        <MyTextInput style={{ marginTop: -10 }}
                            label="Full Name"
                            placeholder="Juan Dela Cruz"
                            placeholderTextColor={darklight}
                            value={fullname}
                            onChangeText={text => setfullname(text)}
                        />
                        <Line />

                        <MyTextInput style={{ marginTop: -10 }}
                            label="Phone Number"
                            placeholder="+639*********"
                            placeholderTextColor={darklight}
                            value={phoneNum}
                            onChangeText={text => setphoneNum(text)}
                        />
                        <Line />

                        <MyTextInput style={{ marginTop: -10 }}
                            label="Email Address"
                            placeholder="Example@gmail.com"
                            placeholderTextColor={darklight}
                            keyboardtype="email-address"
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        <Line />

                        <MyTextInput style={{ marginTop: -10 }}
                            label="Gender"
                            placeholder="Male / Female"
                            placeholderTextColor={darklight}
                            value={gender}
                            onChangeText={text => setgender(text)}
                        />
                        <Line />

                        <MyTextInput style={{ marginTop: -10 }}
                            label="Birthday"
                            placeholder="01/01/2000"
                            placeholderTextColor={darklight}
                            value={birthdate}
                            onChangeText={text => birthdate(text)}
                        />
                        <Line />



                        <MyTextInput style={{ marginTop: -10 }}
                            label="Password"
                            placeholder="* * * * * * * * "
                            placeholderTextColor={darklight}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <Line />

                        <MyTextInput style={{ marginTop: -10 }}
                            label="Confirm Password"
                            placeholder="* * * * * * * * "
                            placeholderTextColor={darklight}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            value={confirmpassword}
                            onChangeText={text => setconfirmPassword(text)}

                        />
                        <Line />

                        <StyledBotton style={{
                            marginTop: 20,
                        }} onPress={onHandleSignup}>
                            <ButtonText>
                                Continue
                            </ButtonText>
                        </StyledBotton>

                        <MsgBox style={{ marginTop: 10 }}>Already have an account ? </MsgBox>
                        <MsgBox style={{ marginTop: 10, color: "blue" }} onPress={() => navigation.navigate("LoginScreen")}>Login</MsgBox>

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
                <RightIcon style={{ top: 25 }} onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darklight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;