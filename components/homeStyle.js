import styled from 'styled-components'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Constansts from 'expo-constants'


const StatusBarHeight = Constansts.statusBarHeight;

export const View1 = styled.View`
    flex-direction : column ; 
    height : 600px ;
`

export const ViewHeader = styled.View`
justify-content: space-between;
display: flex;
flex-direction : row;
alignItems: center;
padding: 25px 0;
background - color : #16C2D5;
`

export const ImageHead = styled.Image`
height: 200px;
resize-mode: contain;
marginTop: 5px;
marginLeft: -100px;
`

export const ButtonCheck = styled.TouchableOpacity`
    margin-top : 15px ;
    padding : 50px 10px ;
    border - width : 2px;
    border-color : white;
    justify-content : center ;
    border-radius : 10px ;
    margin-vertical : 3px ;
    margin-left : 10px;
    height : 55px ;
`
export const ButtonText = styled.Text`
    color : white;
    font-size : 16px ;
    text-align : center;
    flex-wrap : wrap;
`;

export const LabelServices = styled.Text`
font-weight: bold;
font-family: Roboto;
font-size: 30px;
margin-top: 10px;
margin-left: 10px;
`

export const ViewContainer = styled.View`
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    flex: 0.5;
    marginTop: 100px;
`

export const StyledButton = styled.TouchableOpacity`
margin: 5px;
width: 150px;
height: 150px;
alignItems: center;
borderRadius: 15px;
elevation: 6;

`

export const ImageButton = styled.Image`
resize-mode: contain;
height: 64px;
width: 64px;
marginTop: 30px;

`

export const ViewInner = styled.View`
flex-direction: row;
`