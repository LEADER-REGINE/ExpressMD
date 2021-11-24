import styled from 'styled-components'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Constansts from 'expo-constants'


const StatusBarHeight = Constansts.statusBarHeight;



//colors

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darklight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
    title: "#000000",
    button1: "#16C2D5",
    button2: "#167694"
}

const { primary, secondary, tertiary, darklight, brand, green, red, title, button1, button2 } = Colors;


export const StyledContainer = styled.View`
    flex : 1 ;
    padding : 25px ;
    padding-top : ${StatusBarHeight + 10}px ;
    background-color : ${primary};
`

export const InnerContainer = styled.View`
    flex : 1 ;
    width : 100% ;
    align-items : center ; 
`;

export const PageLogo = styled.Image`
    width : 350px ;
    height : 250px ; 
`;

export const PageTitle = styled.Text`
    font-size : 15px ;
    text-align : center ; 
    font-weight : bold ;
    color : ${title};
    margin-top : -15px ;
    
`;

export const SubTitle = styled.Text`
    font-size : 50px ;
    margin-top : ${StatusBarHeight + 150}px;
    letter-spacing : 2px ;
    font-weight : 100 ;
    color : #808080;
    margin-left : -185px ;
`;

export const StyledFormArea = styled.View`
    width : 90% ;
    margin-top : 50px;

`;

export const StyledTextInput = styled.TextInput`
    padding : 15px ;
    padding-left : 10px ;
    padding-right : 55px ;
    border-radius : 5px ;
    font-size : 16px ;
    height : 60px ;
    margin-vertical : 3px ;
    margin-bottom : 10px ;
    color : ${tertiary};

`;

export const StyledInputLabel = styled.Text`
    color : ${tertiary};
    font-size : 13px ;
    text-align : left ;
    margin-top : 5px ;
`;

export const LeftIcon = styled.View`
    left : 15px;
    top : 38px ;
    position : absolute ;
    z-index : 1px ;
 
`;

export const RightIcon = styled.TouchableOpacity`
    right : 15px;
    top : 38px ;
    position : absolute ;
    z-index : 1px ;
`;

export const StyledBotton = styled.TouchableOpacity`
    margin-top : 50px ;
    padding : 15px ;
    background-color : ${button1};
    justify-content : center ;
    border-radius : 10px ;
    margin-vertical : 5px ;
    height : 55px ;
`;



export const StyledCreateBotton = styled.TouchableOpacity`
    margin-top : 50px ;
    padding : 15px ;
    background-color : ${button2};
    justify-content : center ;
    border-radius : 10px ;
    margin-vertical : 5px ;
    height : 55px ;
`;

export const ButtonText = styled.Text`
    color : ${primary};
    font-size : 16px ;
    text-align : center;
`;

export const MsgBox = styled.Text`
    text-align : center ;
    font-size : 13px ; 
    letter-spacing : 1px ;

`;

export const Line = styled.View`
    height : 1px ;
    width : 100% ;
    background-color : ${darklight};
    margin-top : -18px;

`;