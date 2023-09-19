import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image, ScrollView} from 'react-native';

const ImagesModal = (props) => {
    return(
        <Modal style={styles.ImageModalContainer}
            visible={props.modalVisible}
            animationType="slide"
            transparent={true}
            >
            <View style={styles.ImageModal}>
                <Pressable style={styles.closeButtonContainer} onPress={props.handleCloseButton}>
                    <Text style={styles.closeButton}>X</Text>
                </Pressable>
                <ScrollView style={styles.disasterImageContainer} contentContainerStyle={{flexGrow : 1, justifyContent : 'center', alignItems:"center"}}>
                <Image 
                    style={styles.disasterImage}
                    source={{uri:'https://cdn.theatlantic.com/thumbor/FO-FMbpJUKWssaqEFdIf5xJgj-E=/900x600/media/img/photo/2023/06/ukraine-dam-flood/a01_AP23161709619803/original.jpg'}}
                />
                <Image 
                    style={styles.disasterImage}
                    source={{uri:'https://www.munichre.com/content/dam/munichre/global/images/royalty-free/AdobeStock_312463244.jpeg/_jcr_content/renditions/original.image_file.1200.800.file/AdobeStock_312463244.jpg'}}
                />
                <Image 
                    style={styles.disasterImage}
                    source={{uri:'https://img.etimg.com/thumb/width-1200,height-900,imgsize-2113773,resizemode-75,msid-101848758/wealth/personal-finance-news/north-india-floods-july-2023-irdai-urges-insurers-to-settle-flood-related-insurance-claims-on-fast-track-basis.jpg'}}
                />
                <Image 
                    style={styles.disasterImage}
                    source={{uri:'https://www.aljazeera.com/wp-content/uploads/2023/07/2023-07-08T141412Z_191035043_RC2YY1A79U8J_RTRMADP_3_ASIA-WEATHER-INDIA-MONSOON-1688893016.jpg'}}
                />
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    ImageModalContainer: {
    },
    ImageModal: {
        position: "absolute",
        top:"20%",
        // left:"15%",
        width: "100%",
        height: "80%",
        backgroundColor:"white",
        padding:"2vh",
        borderRadius:20
    },
    closeButtonContainer: {
    },
    closeButton: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight:"bold",
        fontSize:25
    },
    disasterImageContainer: {

    },
    disasterImage: {
        width: 300,
        height: 270,
        resizeMode: 'stretch',
        marginHorizontal:10,
        marginVertical:10,
    }
});

export default ImagesModal;