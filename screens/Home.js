import React from "react";
import {BookContext} from '../contexts/bookContext'
import {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions, FlatList} from "react-native";


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

    const renderBookList = () => {
        const renderItem = ({item}) => {

            return(
            <TouchableOpacity
                style={{marginHorizontal: 20}}
                onPress={() => console.log('works')}
            >
                <View>
                    <Image source={item.url}
                           resizeMode='cover'
                           style={{
                               width: 80,
                               height: 100,
                               borderRadius: 20
                           }}
                    />
                <Text>{item.displayTitle}</Text>
                </View>
            </TouchableOpacity>
        )
        }

        return (
            <FlatList
                data={bookList}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {renderHeader()}
            {renderBookList()}
        </SafeAreaView>
    )
}


export default Home;