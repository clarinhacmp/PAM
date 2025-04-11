import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";

export default function Form() {

        const [text1, setext1] = useState('');
        const [text2, setext2] = useState('');
        const [text, setext] = useState('');
        const [fim, setFinal] = useState("teste");

        return(

        <View>
                <TextInput
                    placeholder="Digite Aqui"
                    value={text}
                    onChangeText={setext}
                />
                <TextInput
                    placeholder="Digite Aqui"
                    value={text1}
                    onChangeText={setext1}
                />
                <TextInput
                    placeholder="Digite Aqui"
                    value={text2}
                    onChangeText={setext2}
                />
                <CustomButton
                title="Clicar"
                onPress={() => {setFinal(text +" "+text1 +" "+text2)}}/>

                <Text>{fim}</Text>
                </View>
        )

                

}