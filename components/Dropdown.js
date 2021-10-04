import React, {useState, useEffect, useCallback, useRef} from "react"
import {BookContext} from "../contexts/bookContext"
import {useContext} from "react"
import axios from "axios"
import {View, StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';
import _ from "lodash";


function Dropdown() {
    const [levels, setLevels] = useState([])
    const {selectedLevel, setSelectedLevel, bookList, selectedSubject, setSelectedSubject} = useContext(BookContext)

    const init = useCallback(async () => {
        axios({
            url: "https://api-dev.lelivrescolaire.fr/graphql",
            method: "post",
            data: {
                query: `
        {
        viewer {
          levels {
          name 
          id 
          order
        }
      }
    }`,
            },
        }).then(result => {
            setLevels(result?.data?.data?.viewer?.levels)
        })
        console.log(levels)
        // TODO: This line shows a warning about non-including the levels in the dependencies. How do you get rid of it?
    }, [])

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        init()
    }, [init])


    // get the subject(s) of each book
    const subjects = bookList.map((book) =>
        book.subjects.map((subject) => subject.name)).flat()

    //remove duplicate values
    const uniqueSubjects = _.uniq(subjects)
    // console.log(uniqueSubjects)

    return (
        <View style={styles.container}>
        <Picker
            selectedValue={selectedLevel}
            onValueChange={(itemValue, itemIndex) => {
                setSelectedLevel(itemValue);
            }}
            style={styles.dropdown}
        >
            <Picker.Item label="All" value="All">
                All
            </Picker.Item>
            {levels.map(level => (
                <Picker.Item key={level.name} label={level.name} value={level.name}/>
            ))}
        </Picker>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'pink',
        marginTop:40,
        alignItems: "center",
        justifyContent: 'flex-start',
        width :'100%',
    },
    dropdown:{
        color: 'black',
        width: 200,
        height: 20,
        justifyContent:"center",
        paddingBottom: 100,
        marginTop : 50
    }
});


export default Dropdown


