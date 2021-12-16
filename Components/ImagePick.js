import React, { useState, useEffect } from 'react';
import {Image, View, Platform, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImagePick = () => {
const [CheckIMage, setCheckIMage] = useState(true);
const [IMageSource, setIMageSource] = useState("");

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
      // setUpload(result.uri);
      // IMage = result.uri;
      setIMageSource(result.uri);
      setCheckIMage(false);
    }
};

return (
    <View style={{alignItems: 'center', justifyContent:'flex-end'}}>
        {CheckIMage ? (
          <TouchableOpacity onPress={() => pickImage()}>
            <View style={{width:100,height:100,borderWidth:1,borderColor:"#8c8c8c",borderRadius:100,alignSelf: "center",justifyContent:'center',alignItems:'center'}}>
              <Ionicons name="person-outline" size={60} color="#8c8c8c" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => pickImage()}>
            <View style={{ alignSelf: "center",}}>
              <Image
                style={{ height: 100, width: 100, borderRadius: 100 }}
                source={{ uri: IMageSource }}
              />
            </View>
          </TouchableOpacity>
        )}
    </View>
    );
}

export default ImagePick;
