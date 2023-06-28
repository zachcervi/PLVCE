import { View, Image, Text, Pressable, StyleSheet } from "react-native";

function PlaceItem({ place, onSelect }) {
  const { title, imageUri, address } = place;
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    
})

export default PlaceItem;
