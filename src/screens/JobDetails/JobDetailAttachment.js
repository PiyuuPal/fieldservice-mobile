import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { jobStyles } from "./JobDetailStyle";
import { addIcon, camera, gallery } from "@/assets";
import { shadow } from "@/theme";
import axios from "axios";
import { ShowToastMessage } from "@/helpers";
import { useState } from "react";
import ImagePicker from "react-native-image-crop-picker";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

export function JobDetailAttachment(props) {
  const getjobId = useSelector((state) => state?.job?.getJobId);
  const [selectedImage, setSelectedImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );
console.log("jobDetailsData",jobDetailsData)
  const transparent = "rgba(0,0,0,0.5)";

  const uploadImage = async (image) => {
    console.log("image 1", image);

    var formdata = new FormData();
    formdata.append("job_id",jobDetailsData?.job_id);

    // if (image == "") {
    //   formdata.append("job_attachment", "");
    // } else {
      formdata.append("job_attachment", {
        type: image?.mime,
        name: "image.png",
        uri: image?.path,
      });
    // }

    console.log("formdata", formdata);

    let PostUrl = "https://ca8c-182-64-191-164.ngrok-free.app/test.php";
    try {
      const response = await axios.post(PostUrl, formdata, {
        headers: {
          Accept: "*/*",
          // "Content-Type": "application/x-www-form-urlencoded",
          'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu',
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJJc3N1ZXIgb2YgdGhlIEpXVCIsImF1ZCI6IkF1ZGllbmNlIHRoYXQgdGhlIEpXVCIsInN1YiI6IlN1YmplY3Qgb2YgdGhlIEpXVCIsIm5iZiI6MTY5MDE5MzU2NSwiaWF0IjoxNjkwMTkzNTU1LCJleHAiOjE2OTAyNzk5NTUsImRhdGEiOnsiaWQiOiIyNDYiLCJidXNpbmVzc19pZCI6IjE4MyIsImFkZHJlc3MxIjoiVENHIDYgNiIsImFkZHJlc3MyIjoiIiwiY2l0eSI6Ikx1Y2tub3ciLCJzdGF0ZSI6IlV0dGFyIFByYWRlc2giLCJ6aXAiOiIyMjYwMTAiLCJjb3VudHJ5IjoiSW5kaWEiLCJsYXQiOiIyNi44NTI0NTg4IiwibG5nIjoiODEuMDIwMjUzMyIsImJ1c2luZXNzRW1haWwiOiJhbmltZXNobUBvYnNlcnZhbmNlZ3JvdXAuY29tIiwiY3JlYXRlZCI6IjIwMjMtMDUtMTYiLCJmaXJzdF9uYW1lIjoiU2hvYmhpdCIsImxhc3RfbmFtZSI6IlNpbmdoIiwiZW1haWwiOiJhbmltZXNobUBvYnNlcnZhbmNlZ3JvdXAuY29tIiwicm9sZSI6IjIiLCJwZXJtaXNzaW9uX2xldmVsIjoiMSIsInVzZXJfaW1hZ2UiOm51bGwsImlzTG9nZ2VkSW4iOnRydWUsImNvbXBhbnlfcGhvbmUiOiIrMTkwODY2MzE4NTgiLCJjb21wYW55X3Bob25lX2ZyaWVuZGx5X25hbWUiOiIoOTA4KSA2NjMtMTg1OCIsImlwYWRkcmVzcyI6IjQ5LjM3LjUxLjE3MCIsInN1YnNjcmlwdGlvbl9zdGF0dXMiOiJwYWlkIn19.PUhxCIHl5Jvwqn1gXTsWb3Fswjc9FyzGtqxgX1cN9y4",
        },
      });
      console.log("upload file", response.data);
    } catch (error) {
      console.log("Error uploading image", error);
    }
  };

  function imageupLoad(index) {
    if (index == "2") {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        cropperCircleOverlay: false,
        mediaType: "photo",
      }).then((image) => {
        setSelectedImage(image.path);
        uploadImage(image);
        ShowToastMessage("Image upload successfully.");
        setOpenModal(false);
      });
    } else {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        cropperCircleOverlay: false,
        mediaType: "photo",
      }).then((image) => {
        setSelectedImage(image.path);
        uploadImage(image);
        ShowToastMessage("Image upload successfully.");
        setOpenModal(false);
      });
    }
  }

  const renderAttachmentItem = ({ item }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginRight: 10 }}>
          <View
            style={[
              shadow.shadowPhoto,
              {
                borderColor: "#E4EFF2",
                borderRadius: 10,
                borderWidth: 1,
                // padding: 10,
              },
            ]}
          >
            <Image
              source={{ uri: item?.image_url }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 3,
            }}
          >
            <Text style={{ color: "#757588", fontSize: 10 }}>
              {item?.created}
            </Text>
            <Text style={{ color: "#757588", fontSize: 10 }}>{item?.id}</Text>
          </View>
        </View>
      </View>
    );
  };

  const modalOpenView = () => {
    setOpenModal(true);
    setSelectedImage("");
  };

  function renderModal() {
    return (
      <Modal
        visible={openModal}
        onBackdropPress={() => setOpenModal(false)}
        onRequestClose={() => setOpenModal(false)}
        animationType="slide"
        transparent={true}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: transparent,
            justifyContent: "center",
          }}
        >
          <View style={[jobStyles.modalView, { height: "40%" }]}>
            <Ionicons
              name="close"
              size={25}
              color={"#041B3E"}
              style={{ marginLeft: 5 }}
              onPress={() => setOpenModal(false)}
            />
            <View style={{ alignItems: "center", marginVertical: 10 }}>
              <Text style={jobStyles.modalheading}>Add Attachment</Text>
            </View>
            <TouchableOpacity
              onPress={() => imageupLoad("1")}
              style={[
                shadow.primaryView,
                { flexDirection: "row", padding: 15, marginTop: 10 },
              ]}
            >
              <Image source={camera} />
              <Text style={[jobStyles.headingTxt, { marginLeft: 25 }]}>
                Take Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => imageupLoad("2")}
              style={[
                shadow.primaryView,
                { flexDirection: "row", padding: 15, marginTop: 10 },
              ]}
            >
              <Image source={gallery} />
              <Text style={[jobStyles.headingTxt, { marginLeft: 25 }]}>
                Choose From Library / Gallery
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={{ marginTop: 30 }}>
      <View style={jobStyles.viewTags}>
        <Text style={jobStyles.headingTxt}>Attachments</Text>
        <TouchableOpacity onPress={modalOpenView}>
          <Image source={addIcon} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20, flexDirection: "row" }}>
        {selectedImage ? (
          <View style={{ marginRight: 10 }}>
            <Image
              source={{ uri: selectedImage }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
          </View>
        ) : (
          <View
            style={{
              paddingHorizontal: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Upload file</Text>
          </View>
        )}
        <FlatList
          style={{ width: "100%" }}
          renderItem={renderAttachmentItem}
          data={jobDetailsData?.attachment}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* {getAttchments?.length != 0 ? <FlatList
          style={{ width: '100%' }}
          renderItem={renderAttachmentItem}
          data={getAttchments}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> : <NoRecords />} */}
      </View>
      {renderModal()}
      {/* <ActionSheet
        ref={actionSheet}
        title={'Which one do you like ?'}
        options={['Gallery', 'Camera', 'Cancel']}
        cancelButtonIndex={2}
        destructiveButtonIndex={2}
        onPress={(index) => {
          imageuploadData(index);
        }}
      /> */}
    </View>
  );
}
