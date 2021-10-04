import React from "react";
import {BookContext} from '../contexts/bookContext'
import {useContext} from "react";
import {View, Text, StyleSheet,TouchableOpacity, Image, SafeAreaView, Dimensions} from "react-native";


const Home = () => {
    const {selectedLevel, selectedSubject, bookList} = useContext(BookContext);

    const renderHeader = () => {
        return (
        <View style={{flexDirection : 'row', height: 50}}>
            <TouchableOpacity style={{width : 50, paddingLeft : 20, justifyContent: 'center'}}
            >
            <Image source={require('../assets/favicon.png')}
                   resizeMode='contain'
                   style={{
                       height: 30, width: 30
                   }} />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
                <View
                style={{
                    width:'70%',
                    height:'100%',
                    backgroundColor:' gray',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <Text>Le Livre Scolaire</Text>
                </View>
            </View>
        </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width :'100%',
        height : '100%'
    }
});

export default Home;