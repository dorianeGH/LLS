import React, {useState, useEffect, useCallback} from "react"
import {BookContext} from "../contexts/bookContext"
import {useContext} from "react"
import axios from "axios"
import {View, StyleSheet} from "react-native";
import {Picker} from '@react-native-picker/picker';
import {brown} from "@material-ui/core/colors";


function Dropdown() {
    const [levels, setLevels] = useState([])
    const {selectedLevel, setSelectedLevel} = useContext(BookContext)

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


    console.log(selectedLevel)

    return (
        <View style={styles.picker}>
        <Picker
            selectedValue={selectedLevel}
            style={{height: 20, width: 40}}
            onValueChange={(itemValue, itemIndex) => {
                setSelectedLevel(itemValue);
            }}
        >
            <Picker.Item label="All" value="All">
                All
            </Picker.Item>
            {levels.map(level => (
                <Picker.Item key={level.id} label={level.name} value={level.name}>
                    {level.name}
                </Picker.Item>
            ))}
        </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    picker: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
    },
});
export default Dropdown


