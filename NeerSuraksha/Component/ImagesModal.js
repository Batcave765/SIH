import React, { useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
} from "react-native";

const ImagesModal = (props) => {
  useEffect(() => {
    console.log(props);
  });
  return (
    <Modal
      style={styles.imageModalContainer}
      visible={props.modalVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.imageModal}>
        <Pressable
          style={styles.closeButtonContainer}
          onPress={props.handleCloseButton}
        >
          <Text style={styles.closeButton}>Close</Text>
        </Pressable>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          {props.images ? (
            <Image
              style={styles.disasterImage}
              source={{ uri: props.images }}
            />
          ) : (
            <Text>No image available</Text>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imageModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageModal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    // margin: 20,
    marginTop: "50%",
    height: "60%",
    width: "100%",
  },
  closeButtonContainer: {
    alignSelf: "flex-end",
  },
  closeButton: {
    fontWeight: "bold",
    fontSize: 18,
    color: "blue",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disasterImage: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 10,
  },
});

export default ImagesModal;
