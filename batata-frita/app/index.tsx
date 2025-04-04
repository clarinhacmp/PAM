import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";

export default function HomeScrenn() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Bem-Vindo ao app!{count}</Text>
            
            <Button title="Aumentar" onPress={() => {setCount(count +1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count -1)}}/>
            <Button title="Reset" onPress={() => {setCount(count-count)}}/>
                <CustomButton title="Teste"/>
        </View>
    );
}
