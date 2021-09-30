import React from "react";
import {BookContext} from '../contexts/bookContext'
import {useContext} from "react";
import {View, Text, StyleSheet, SafeAreaView, Dimensions} from "react-native";
import BookCard from "../components/BookCard";
import BookList from "../components/BookList";
import Dropdown from "../components/Dropdown";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const BookPage = () => {
    const {selectedLevel, bookList} = useContext(BookContext);
    const filteredBookByLevel = bookList
        .filter((book) => book.levels.map((l) => l?.name).includes(selectedLevel))

    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Dropdown/>
            <Text style={styles.titleText}>Book Lists</Text>

            {!filteredBookByLevel.length ? (
                <BookList bookList={bookList}/>
            ) : (
                filteredBookByLevel.map((book) => (
                    <BookCard
                        key={book.id}
                        displayTitle={book.displayTitle}
                        url={book.url}
                        id={book.id}
                        valid={book.valid}
                    />
                )))}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        width :'100%',
        height : Dimensions.get('window').height,
    }
});

export default BookPage;