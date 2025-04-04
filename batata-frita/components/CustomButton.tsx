import React from "react";
import { TouchableOpacity } from "react-native";

interface Props {
    title: string
}

export default function CustomButton({title}: Props) {
    return (
        <TouchableOpacity>
            <text>{title}</text>
        </TouchableOpacity>
    );
}