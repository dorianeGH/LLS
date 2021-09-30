import Grid from "@material-ui/core/Grid"
import React, { useContext } from "react"
import { BookContext } from "../contexts/bookContext"
import {View, Text, StyleSheet, ScrollView} from "react-native";
import BookCard from "./BookCard"
import BookPage from "../screens/BookPage";

const BookList = () => {
    const { bookList } = useContext(BookContext)

    return (
        <ScrollView>
        <View style ={styles.container}>
            <View style ={styles.item}>
            {bookList.map(({ id, displayTitle, url, valid }) => (
                <BookCard key={id} {...{ id, displayTitle, url, valid}} />
                ))}
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent:'center',
        marginTop: 20,
        backgroundColor:'brown'
        },

    item: {
        width: '100%',
        alignItems:'center',
        marginTop: 20
    }
})
export default BookList
