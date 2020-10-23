import * as React from 'react';
import {Component} from 'react';
import {useState} from 'react';
import {
    Appbar,
    Provider as PaperProvider,
    DefaultTheme,
    Banner,
    BottomNavigation,
    Text,
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    Checkbox,
    DataTable,
    Drawer,
    FAB,
    Portal,
    Provider,
    List
} from 'react-native-paper';
import { Platform, Image, View, SafeAreaView, StyleSheet} from 'react-native';
//import {mdiHanger} from '@mdi/js';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'yellow',
    },

};
var ans = 0;
const RandomNumber = () => {
    ans = Math.floor(Math.random() * 10);
    console.log('hi');
}

const TestRandom = () => {
    return (
        <SafeAreaView style = {styles.btn}>
            <Button color="#841584" icon = "star" mode = "contained" onPress = {() => console.log('hi')} >
                <Text color = {'red'} text = 'white'>Press me</Text>
            </Button>
        </SafeAreaView>
    )
}
const TestState = () => {
    const[count, setCount] = useState(0);
    return (
        <SafeAreaView style = {styles.btn}>
            <Text>you clicked {count} times</Text>
            <Button color="#841584" icon = "star" mode = "contained" onPress = {() => setCount(count + 1)} >
                <Text color = {'red'} text = 'white'>Press me</Text>
            </Button>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        margin: 100,
        width: 200,
    }, 
})

export default function App() {
    console.log('lavin')
    return (
        <PaperProvider theme={theme}>
            <TestState />
            <TestRandom />
        </PaperProvider>
    )
}

