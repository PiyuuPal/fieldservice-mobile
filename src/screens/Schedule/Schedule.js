import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, FlatList,Image,ImageBackground } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { styles } from './ScheduleStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import { schedule } from '@/actions/UserActions';
import { NAVIGATION } from '@/constants';
import { useDispatch, useSelector } from 'react-redux';
import { backgroundImage, drawer, schduleFilter, search } from '@/assets';
import { shadow, spacing } from '@/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import { sentJobId } from '@/actions/JobActions';
import { SchduleHeader } from '@/components/CustomHeaders/SchduleHeader';
import { headers } from '@/networking/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalLoader } from '@/components/ModalLoader';
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(false);
  
  let currentdate;
  const [selectedDate, setSelectedDate] = useState(() => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    return (currentdate = timeToString(currentDate.getTime()));
  });
  const [isLoading, setIsLoading] = useState(false);
  const getItemFromStorage = async (data) => {
    try {
      const filterItemsString = await AsyncStorage.getItem("schedule Filters");
      if (filterItemsString) {
        const filterItems = JSON.parse(filterItemsString);
        
        // Merge the retrieved data with the passed data
        const mergedData = { ...data, ...filterItems };
        
        // Dispatch the merged data to the Redux store
        dispatch(schedule(mergedData));
      } else {
        
        // Dispatch the passed data to the Redux store
        dispatch(schedule(data));
      }
    } catch (error) {
      
    }
  };
  
  useEffect(() => {
    navigation.addListener('focus', () => {
      setIsFocus(true)
      setTimeout(function () {
        setIsFocus(false)
      }, 2000);
    }, []);
    const data = { "start_date": selectedDate };
    getItemFromStorage(data);
  }, []);
  
  
  
  const scheduledata = useSelector((state) => state?.user?.schedule);
 
  const navToJobDetails = (jobId) => {
  //  
  dispatch(sentJobId(jobId,navigation))
  };

  const renderItem = ({ item }) => {
 
      return (
        <View
          style={{
            backgroundColor: '#F2F4F6',
            padding: 16,
            marginVertical: 16,
            borderRadius:30,
          }}
        >
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navToJobDetails(item.id)}
          >
            <Entypo name={'dots-three-vertical'} size={15} style={styles.dotsicon}/>
            <View style={styles.itemContent}>
              <Text style={[styles.businessheading,{backgroundColor:'#7DC05D'}]}>JOB</Text>
              <View style={styles.itemHeader}>
                <Text style={{ ...styles.itemName, fontWeight: '800', color: 'black',marginLeft:12, }}>
                  JOB#{item.id}
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
                  {item.job_type}
                </Text>
                <Text style={[styles.itemInfo,styles.status]}>
                  {item.job_status}
                </Text>
              </View>
              <View style={styles.textcontainer}>
               
                <Image
                 source={require('@/assets/images/location-icon.png')}
                 style={styles.icon1}
                 />
                
                <Text style={[styles.text,{fontSize:14,marginLeft:14}]}>
                  {item.address1} 
                </Text>
             
              </View>
              <View style={styles.textcontainer}>
               
              
               <Image
                source={{uri: item.image_url}}
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
    
  };
 
  const onDayPress = (day) => {
    setIsLoading(true); // Set loading state to true
    const date = day.toISOString().split('T')[0];
    setSelectedDate(date);
    const data = { "start_date": date };
    getItemFromStorage(data).then(() => {
      setIsLoading(false); // Set loading state to false after API call is completed
    });
  };
 
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <SchduleHeader title={'Schedule'} />
      <ImageBackground  source={backgroundImage} >
       <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
       
      <CalendarStrip
        scrollable={true}
        selectedDate={selectedDate}
        onDateSelected={(day) => onDayPress(day)}
        style={[styles.calendarstrip]}
        calendarHeaderStyle={styles.calendarheaderstyle}
        calendarColor={'white'}
        iconStyle={{ display: 'none' }}
        highlightDateNumberStyle={{ color: 'blue' }}
        highlightDateNameStyle={{ position: 'absolute', bottom: 0, color: 'blue' }}
        disabledDateNameStyle={{ color: 'grey' }}
        disabledDateNumberStyle={{ color: 'grey' }}
        dateNameStyle={{ position: 'absolute', bottom: 0 }}
        markedDatesStyle={{ position: 'absolute', top: -30, right: -15 }}
        markedDates={[
          {
            date: currentdate,
            dots: [
              {
                key: 'current',
                color: '#7DC05D',
              },
            ],
          },
        ]}
      />

   </View>
      </ImageBackground>
      <Text style={styles.date}>{formatDate(selectedDate)}</Text>
      {isLoading ? ( // Show loader if isLoading is true
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <FlatList
          data={scheduledata}
          renderItem={renderItem}
          style={styles.list}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.contentContainer}
          ListEmptyComponent={() => (
            <View style={styles.emptyComponent}>
              <Text style={styles.emptyText}>No jobs available for {formatDate(selectedDate)}</Text>
            </View>
          )}
        />
        
      )}
        <ModalLoader modalView={isFocus} />
    </SafeAreaView>
  );
};

export default Schedule;
