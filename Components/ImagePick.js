import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from "@expo/vector-icons";

const ImagePick = () => {
const [image, setImage] = useState(null);

useEffect(() => {
    (async () => {
    if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        }
    }
    })();
}, []);

const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
    setImage(result.uri);
    }
};

return (
    <View style={{flex:1 ,alignItems: 'center', justifyContent: 'center' }}>
    
        {image && <Image source={{ uri: image }} style={{ width: 150, height: 150,borderRadius:100 }} />}
        <View>
            <TouchableOpacity style={{marginLeft:'57%',bottom:'150%'}} onPress={pickImage}>
                <AntDesign name="edit" size={36} color="#000" />
            </TouchableOpacity>
        </View>
    </View>
    );
}

export default ImagePick;
