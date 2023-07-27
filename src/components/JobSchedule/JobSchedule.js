import React, { useState } from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { style } from './JobSchedulestyles';
import Feather from 'react-native-vector-icons/Feather';
import { spacing } from '@/theme';
import { useDispatch, useSelector } from 'react-redux';
import { JobSchedule } from '@/actions/UserActions';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

const JobScheduleComponent = (props) => {
  const navigation = useNavigation();
  const getjobId = useSelector((state) => state?.job?.getJobId);
  const jobDetailsData = useSelector(
    (state) => state?.user?.jobDetailsDataReducer
  );
  console.log("jobddetaildata12333=======>", jobDetailsData)
  const dispatch = useDispatch();
  //start date Time
  const getjobStartdateTime = new Date(`${jobDetailsData.start_date}T${jobDetailsData.start_time}`);
  const changeStartdateTimeJob = getjobStartdateTime.toString();
  console.log("changeStartdateTimeJob-->", changeStartdateTimeJob);
// End date Time
  const getjobEnddateTime = new Date(`${jobDetailsData.end_date}T${jobDetailsData.end_time}`);
  const changeEnddateTimeJob = getjobEnddateTime.toString();
  console.log("changeEnddateTimeJob-->", changeEnddateTimeJob);

  const [startDate, setStartDate] = useState(new Date(changeStartdateTimeJob));
  const [openStartDate, setOpenStartDate] = useState(false);
  const [startTime, setStartTime] = useState(startDate);
  const [openStartTime, setOpenStartTime] = useState(false);
  const [endDate, setEndDate] = useState(new Date(changeEnddateTimeJob));
  const [openEndDate, setOpenEndDate] = useState(false);
  const [endTime, setEndTime] = useState(endDate);
  const [openEndTime, setOpenEndTime] = useState(false);
  console.log("startdateformate-->", new Date(startDate.getTime() + 60 * 60 * 1000))
  console.log("jobdetails===>", jobDetailsData?.start_date + "--->" + jobDetailsData?.start_time)
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
    return formattedTime;
  };
  const handlePushOneHour = () => {

    const newStartDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Add one hour (in milliseconds) to the start date
    const newEndDate = new Date(endDate.getTime() + 60 * 60 * 1000); // Add one hour (in milliseconds) to the end date

    setStartDate(newStartDate);

    setEndDate(newEndDate);

  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const options = {
      month: 'short', // Format month as a three-letter abbreviation (e.g., "Jun")
      day: 'numeric', // Format day as a number (e.g., "12")
      year: 'numeric', // Format year as a number (e.g., "2023")
      daySuffix: 'numeric', // Include the day suffix (e.g., "12th")
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }
  const handlepushsixpm = () => {
    const now = new Date();
    const currentHour = now.getHours();
    //
    const currentMins = now.getMinutes();
    // Check if the current hour is before 6 PM
    if (currentHour < 18) {
      const targetStartDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 0, 0); // Set the target start date to today at 6 PM
      const targetEndDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 0, 0); // Set the target end date to today at 7 PM
      setStartDate(targetStartDate);

      setEndDate(targetEndDate);

    }
    else if (currentHour == 18 && currentMins == 0) {

    }
    else {
      const targetStartDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 18, 0, 0); // Set the target start date to tomorrow at 6 PM
      const targetEndDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 19, 0, 0); // Set the target end date to tomorrow at 7 PM
      setStartDate(targetStartDate);

      setEndDate(targetEndDate);

    }
  };
  const handlepushsixam = () => {
    const now = new Date();
    const currentHour = startDate.getHours();
    //
    const currentMins = startDate.getMinutes();
    // Check if the current hour is before 6 PM
    if (currentHour < 6) {
      const targetStartDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0); // Set the target start date to today at 6 PM
      const targetEndDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0); // Set the target end date to today at 7 PM
      setStartDate(targetStartDate);

      setEndDate(targetEndDate);

    }
    else if (currentHour == 6 && currentMins == 0) {

    }
    else {
      const targetStartDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 6, 0, 0); // Set the target start date to tomorrow at 6 PM
      const targetEndDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 7, 0, 0); // Set the target end date to tomorrow at 7 PM
      setStartDate(targetStartDate);

      setEndDate(targetEndDate);

    }
  };
  const nextweek = () => {
    const now = new Date();
    const currentDayOfWeek = now.getDay(); // Get the current day of the week (0-6, where 0 is Sunday)
    const currentHour = startDate.getHours();
    const currentMinutes = startDate.getMinutes();

    // Calculate the number of days until the next Monday
    const daysUntilNextMonday = (1 + 7 - currentDayOfWeek) % 7;

    // Calculate the target start date and time (next Monday at 9 AM)
    const targetStartDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysUntilNextMonday + 7, // Add 7 to ensure it's the next week
      9,
      0,
      0
    );

    // Check if the current start date is already set to the next week's Monday at 9 AM
    if (
      targetStartDate.getTime() !== startDate.getTime() ||
      (currentHour === 9 && currentMinutes === 0)
    ) {
      // Update the start and end dates to the next Monday at 9 AM
      const targetEndDate = new Date(
        targetStartDate.getFullYear(),
        targetStartDate.getMonth(),
        targetStartDate.getDate(),
        10,
        0,
        0
      );

      setStartDate(targetStartDate);
      setEndDate(targetEndDate);
    }
  };
  function convertTime(timestamp) {
    // Create a Date object from the given timestamp
    const date = new Date(timestamp);

    // Get the local time in the desired format
    const localTime = date.toLocaleTimeString([], { hour12: false });

    // Return the local time
    return localTime;
  }
  function convertDate(timestamp) {
    // Split the timestamp by 'T' to separate the date and time
    //const date = new Date(timestamp);
    const date = new Date(timestamp);
    return date.toISOString().split('T')[0];
  }
  const handleSubmit = () => {
    const data = {
      jobId: getjobId,
      startDate: convertDate(startDate),
      startTime: convertTime(startDate),
      endDate: convertDate(endDate),
      endTime: convertTime(endDate)
    };
    dispatch(JobSchedule(data, navigation, props?.modalView, props?.refreshView));
    // console.log("press me--->",props?.modal)
    // setOpenModal(false)
    //  
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={style.datecontainer}>
          <View style={{ padding: 10, width: '50%' }}>
            <Text style={style.dateheading}>Job Start Date & Time</Text>
            <View style={style.datebox}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setOpenStartDate(true)}>
                <Text style={style.text}>{formatDate(startDate)}</Text>
                <Image source={require('@/assets/images/calendar-icon.png')} style={style.image} />
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setOpenStartTime(true)}>
                <Text style={style.text}>{formatTime(startDate)}</Text>
                <Image source={require('@/assets/images/clock-arrow.png')} style={style.image} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ padding: 10, width: '50%' }}>
            <Text style={style.dateheading}>Job End Date & Time</Text>
            <View style={style.datebox}>
              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setOpenEndDate(true)}>
                <Text style={style.text}>{formatDate(endDate)}</Text>
                <Image source={require('@/assets/images/calendar-icon.png')} style={style.image} />
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setOpenEndTime(true)}>
                <Text style={style.text}>{formatTime(endDate)}</Text>
                <Image source={require('@/assets/images/clock-arrow.png')} style={style.image} />
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={style.horizontalLine}></View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={style.optionheading}>More Options</Text>
            <TouchableOpacity style={style.txtBtn} onPress={handlePushOneHour}>
              <Image source={require('@/assets/images/clock-arrow.png')} style={[style.image, { marginLeft: 10 }]} />
              <Text style={style.txtStyle}>Push one hour</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.txtBtn} onPress={handlepushsixpm}>
              <Image source={require('@/assets/images/clock-arrow.png')} style={[style.image, { marginLeft: 10 }]} />
              <Text style={style.txtStyle}>Later Today (6PM)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.txtBtn} onPress={handlepushsixam}>
              <Image source={require('@/assets/images/clock-arrow.png')} style={[style.image, { marginLeft: 10 }]} />
              <Text style={style.txtStyle}>Tomorrow Morning (6Am)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.txtBtn} onPress={nextweek}>
              <Image source={require('@/assets/images/calendar-icon.png')} style={[style.image, { marginLeft: 10 }]} />
              <Text style={style.txtStyle}>Next Week (Mon 9 AM)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ padding: spacing.m }}>
          <TouchableOpacity style={style.btnStyle} onPress={handleSubmit}>
            <View style={style.savebutton}>
              <Image source={require('@/assets/images/save.png')} />
            </View>
            <Text style={style.savetext}>Save</Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={openStartDate}
          date={startDate}
          mode="date"
          androidVariant="iosClone"
          onConfirm={(selectedDate) => {
            setOpenStartDate(false);
            setStartDate(selectedDate);
          }}
          onCancel={() => {
            setOpenStartDate(false);
          }}

        />
        <DatePicker
          modal
          open={openStartTime}
          date={startDate}
          mode="time"
          androidVariant="iosClone"
          onConfirm={(selectedTime) => {
            setOpenStartTime(false);
            setStartDate(selectedTime);
          }}
          onCancel={() => {
            setOpenStartTime(false);
          }}
        />
        <DatePicker
          modal
          open={openEndDate}
          date={endDate}
          mode="date"
          androidVariant="iosClone"
          onConfirm={(selectedDate) => {
            setOpenEndDate(false);
            setEndDate(selectedDate);
          }}
          onCancel={() => {
            setOpenEndDate(false);
          }}
        />

        <DatePicker
          modal
          open={openEndTime}
          date={endDate}
          mode="time"
          androidVariant="iosClone"
          onConfirm={(selectedTime) => {
            setOpenEndTime(false);
            setEndDate(selectedTime);
          }}
          onCancel={() => {
            setOpenEndTime(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default JobScheduleComponent;
