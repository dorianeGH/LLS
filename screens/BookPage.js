import React from "react";
import {BookContext} from '../contexts/bookContext'
import {useContext} from "react";
import {View, Text, StyleSheet, SafeAreaView, Dimensions, ScrollView} from "react-native";
import BookCard from "../components/BookCard";
import BookList from "../components/BookList";
import Dropdown from "../components/Dropdown";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import _ from "lodash";
import {Picker} from "@react-native-picker/picker";

const BookPage = () => {
    const {selectedLevel, selectedSubject, bookList} = useContext(BookContext);

    //-------by level------//
    //filter and sort the books by level criteria
    const filteredBooksByLevel = bookList
        .filter((book) => book.levels.map((l) => l?.name).includes(selectedLevel))
        .sort((a,b)=> a.subjects.name > b.subjects.name ? -1: 1)


/*

        // .sort((a,b)=> a.subjects.name > b.subjects.name ? -1: 1)
    var mapAsc = new Map([...map.entries()].sort());
    var mapAsc = new Map([...map.entries()].sort((a,b) => a[0] > b[0]));
*/

    console.log(filteredBooksByLevel)

    //sort the books by level criteria
    const sortedBookByLevel =filteredBooksByLevel
        .map((book)=> book.subjects?.[0] ?? 'no subject')
        .sort((a,b)=> a.name > b.name)



    //-------by subject------//
/*    const filteredBookBySubject = bookList
        .filter((book) => book.subjects.map((subject) => subject?.name).includes(selectedSubject))*/

    //-------by subject and level ------//
/*    const filterInOne = _.unionBy([filteredBooksByLevel, filteredBookBySubject], [selectedSubject], );
        console.log(filterInOne)*/

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Book Lists</Text>
            <Dropdown/>
            <ScrollView>
                {selectedLevel ==="All" ? (
                    <BookList bookList={bookList}/>
                ) : (
                    filteredBooksByLevel.map((book) => (
                        <BookCard
                            key={book.id}
                            displayTitle={book.displayTitle}
                            url={book.url}
                            id={book.id}
                            valid={book.valid}
                            subjects={book.subjects}
                        />
                    )))}

              {/*  {!filteredBookBySubject.length ? (
                    <BookList bookList={bookList}/>
                ) : (
                    filteredBookBySubject.map((book) => (
                        <BookCard
                            key={book.id}
                            displayTitle={book.displayTitle}
                            url={book.url}
                            id={book.id}
                            valid={book.valid}
                            subjects={book.subjects}
                        />
                    )))}*/}


{/*                {filterInOne.length ? (
                    <BookList bookList={bookList}/>
                ) : (
                    filterInOne.map((book) => (
                        <BookCard
                            key={book.id}
                            displayTitle={book.displayTitle}
                            url={book.url}
                            id={book.id}
                            valid={book.valid}
                            subjects={book.subjects}
                        />
                    )))}*/}
            </ScrollView>
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

export default BookPage;