import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton";
import Example from "@/components/Example";
import Form from "@/components/Form";

export default function HomeScrenn() {
    const [count, setCount] = useState(0);
    const [nome, setNome] = useState("little clara ");
    

    return (
        <View>
            <Text>Bem-Vindo ao APP!{count}</Text>
            
            <Button title="Aumentar" onPress={() => {setCount(count +1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count -1)}}/>
            <Button title="Reset" onPress={() => {setCount(count-count)}}/>

                <CustomButton
                title="Clicar"
                onPress={() => {setNome('clarinha' + count)}}/>
                <Text>Bem-Vindo ao APP!{nome}</Text>
                <Form/>
                
            <Example example="oioioi"/>
        </View>
    );
}