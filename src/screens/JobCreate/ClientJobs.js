import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { style } from './JobCreate.styles';
import { backgroundImage, locationIcon, noAvailableImg, search } from '@/assets';
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Schedule/ScheduleStyles';
import { clientJobCountList } from '@/actions/UserActions';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { sentJobId } from '@/actions/JobActions';
import { ModalLoader } from '@/components/ModalLoader';
import { spacing } from '@/theme';


const ClientJobs = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [isFocus, setIsFocus] = useState(false);
    const [userInput, setUserInput] = useState('');
    const getClientDetail = useSelector((state) => state?.user?.storeExistClientListReducer);
    const countClientJob = useSelector((state) => state?.user?.clientJobCount);
    // console.log('999===', countClientJob)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            setIsFocus(true)
            setTimeout(function () {
                setIsFocus(false)
            }, 2000);
        }, []);
        const payload = {
            id: getClientDetail?.id,
        };
        // console.log('checkJOB---', payload)
        dispatch(clientJobCountList(payload, navigation))
    }, [isFocus]);

    const navToJobDetails = (jobId) => {
        dispatch(sentJobId(jobId, navigation))
    };

    const renderItem = ({ item }) => {
        if (userInput === "") {
            return (
                <View
                    style={{
                        backgroundColor: '#F2F4F6',
                        padding: 16,
                        marginVertical: 16,
                        borderRadius: 30,
                    }}
                >
                    <TouchableOpacity
                        style={styles.itemContainer}
                        // onPress={() => dispatch(sentJobId(getClientDetail?.id, navigation))}
                        onPress={() => navToJobDetails(item?.job_id)}
                    >
                        <Entypo name={'dots-three-vertical'} size={15} style={styles.dotsicon} />
                        <View style={styles.itemContent}>
                            <Text style={[styles.businessheading, { backgroundColor: '#7DC05D' }]}>JOB</Text>
                            <View style={styles.itemHeader}>
                                <Text style={{ ...styles.itemName, fontWeight: '800', color: 'black', marginLeft: 12, }}>
                                    JOB#{item?.job_id}
                                </Text>
                                <Text style={styles.jobtime}>
                                    {moment(item?.startDate).format('MMM DD')} {moment(item?.start_time, 'HH:mm:ss').format('h:mm A')}
                                </Text>
                            </View>
                            <View style={styles.textcontainer}>

                                <Image
                                    source={require('@/assets/images/jobs.png')}
                                    style={styles.icon}
                                />

                                <Text style={[styles.text]}>
                                    {item?.job_type_name}
                                </Text>
                                <Text style={[styles.itemInfo, styles.status]}>
                                    {item.job_status}
                                </Text>
                            </View>
                            <View style={styles.textcontainer}>

                                <Image
                                    source={require('@/assets/images/location-icon.png')}
                                    style={styles.icon1}
                                />

                                <Text style={[styles.text, { fontSize: 14, marginLeft: 14 }]}>
                                    {item?.service_address_1}
                                </Text>

                            </View>
                            <View style={styles.textcontainer}>


                                <Image
                                    source={noAvailableImg ? noAvailableImg : { uri: item?.image_url }}
                                    style={styles.icon}
                                />
                                <Text style={[styles.text]}>
                                    {item.first_name} {item.last_name}
                                </Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        }
        if (item?.first_name?.toLowerCase().includes(userInput?.toLowerCase())) {
            return (
                // <TouchableOpacity style={[style.txtFieldView, { marginVertical: 2 }]}
                //     onPress={() => dispatch(sentJobId(getClientDetail?.id, navigation))}
                // >
                //     <Text style={[style.txtFieldTitle, { marginLeft: 10 }]}>{item?.first_name != undefined ? item?.first_name : ''} {item?.last_name != undefined ? item?.last_name : ''}</Text>
                // </TouchableOpacity>
                // <Text>dvdds</Text>

                <View
                    style={{
                        backgroundColor: '#F2F4F6',
                        padding: 16,
                        marginVertical: 16,
                        borderRadius: 30,
                    }}
                >
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => dispatch(sentJobId(getClientDetail?.id, navigation))}
                    >
                        <Entypo name={'dots-three-vertical'} size={15} style={styles.dotsicon} />
                        <View style={styles.itemContent}>
                            <Text style={[styles.businessheading, { backgroundColor: '#7DC05D' }]}>JOB</Text>
                            <View style={styles.itemHeader}>
                                <Text style={{ ...styles.itemName, fontWeight: '800', color: 'black', marginLeft: 12, }}>
                                    JOB#{item?.job_id}
                                </Text>
                                <Text style={styles.jobtime}>
                                    {/* {moment(item?.startDate).format('MMM DD')} {moment(item?.start_time, 'HH:mm:ss').format('h:mm A')} */}
                                </Text>
                            </View>
                            <View style={styles.textcontainer}>

                                <Image
                                    source={require('@/assets/images/jobs.png')}
                                    style={styles.icon}
                                />

                                <Text style={[styles.text]}>
                                    {item?.job_type_name}
                                </Text>
                                <Text style={[styles.itemInfo, styles.status]}>
                                    {item.job_status}
                                </Text>
                            </View>
                            <View style={styles.textcontainer}>

                                <Image
                                    source={require('@/assets/images/location-icon.png')}
                                    style={styles.icon1}
                                />

                                <Text style={[styles.text, { fontSize: 14, marginLeft: 14 }]}>
                                    {item?.service_address_1}
                                </Text>

                            </View>
                            <View style={styles.textcontainer}>


                                <Image
                                    source={noAvailableImg ? noAvailableImg : { uri: item?.image_url }}
                                    style={styles.icon}
                                />
                                <Text style={[styles.text]}>
                                    {item.first_name} {item.last_name}
                                </Text>

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    };

    const clientJobCount = countClientJob;
    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.container}>
                <View style={style.firstView}>
                    <ImageBackground
                        source={backgroundImage}
                        style={{
                            height: 98,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 12,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 16.0,

                            elevation: 24,
                            backgroundColor: "white",
                        }}
                    >
                        <View style={{ flexDirection: "row", padding: 20 }}>
                            <Entypo
                                name="cross"
                                size={30}
                                style={style.custIcon}
                                onPress={() => navigation.goBack()}
                            />
                            <Text style={style.headerTitlee}>All Jobs</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={style.secView}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={style.headerTitlew}>Client Jobs</Text>
                    </View>
                    <View style={style.searchView}>
                        <TextInput
                            style={style.textboxfield}
                            placeholder="Search for Jobs"
                            placeholderStyle={style.placeholder}
                            onChangeText={(text) => setUserInput(text)}
                        />
                        <Image source={search} />
                    </View>



                </View>

                {isLoading ? ( // Show loader if isLoading is true
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="black" />
                    </View>
                ) : (
                    <FlatList
                        data={clientJobCount}
                        renderItem={renderItem}
                        style={styles.list}
                        contentContainerStyle={styles.contentContainer}
                        ListEmptyComponent={() => (
                            <View style={{ backgroundColor: '#ECECEC', padding: spacing.xx, alignSelf: 'center' }}>
                                <Text style={{ color: '#041B3E', textAlign: 'center' }}>No jobs available for
                                    {/* {formatDate(selectedDate)} */}
                                </Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                )}

            </ScrollView>
            <ModalLoader modalView={isFocus} />
        </SafeAreaView>
    )
}
export default ClientJobs;