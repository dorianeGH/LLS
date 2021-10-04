import React from "react";
import {BookContext} from '../contexts/bookContext'
import {useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions, FlatList} from "react-native";
import Dropdown from "../components/Dropdown";


const Home = ({navigation}) => {
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
                onPress={() => item.valid == true && navigation.navigate('BookDetails', {
                    book: item
                })}
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
                <Text>{item.valid == true ? 'yes': 'no'}</Text>

                    <View>
                        {item.subjects.map((v, i) => (
                                <Text>{v.name}</Text>
                        ))}
                    </View>

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
            <View>
                {renderHeader()}
            </View>
                <Dropdown/>
            <View>
                {renderBookList()}
            </View>
        </SafeAreaView>
    )
}


export default Home;