import { shadow, spacing } from '@/theme';
import React, { Component, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './Home.styles';
import { color } from 'react-native-reanimated';
import { useState } from 'react';
import { viewAllIcon } from '@/assets';
import { useDispatch, useSelector } from 'react-redux';
import {
  dashboardMenu,
  estimatesData,
  invoicesData,
  jobsData,
  leadsData,
  salesData,
  todaysData,
} from '@/actions/HomeActions';
import { NoRecords } from '@/components/NoRecords';
import { ModalLoader } from '@/components/ModalLoader';
import { NAVIGATION } from '@/constants';
import { useNavigation } from '@react-navigation/native';
export function Dashboard({ navigation }) {
  const dashBoardListData = useSelector((state) => state?.home?.dashboardMenuList);


  const todaysListData = useSelector((state) => state?.home?.todaysList);


  const salesListData = useSelector((state) => state?.home?.salesList);
  // 

  const leadsListData = useSelector((state) => state?.home?.leadsList);
  // 

  const jobsListData = useSelector((state) => state?.home?.jobsList);
  // 

  const estimatesListData = useSelector((state) => state?.home?.estimatesList);
  // 

  const invoicesListData = useSelector((state) => state?.home?.invoicesList);
  // 

  const [changeText, setChangeText] = useState('');
  const [pressedButtonId, setPressedButtonId] = useState(null);
  const [heading, setHeading] = useState(null);
  const [records, setRecords] = useState();
  const [showSales, setShowSales] = useState(false);
  const [buttonColor, setButtonColor] = useState();


  const [selectedId, setSelectedId] = useState(null);
  const color = ['#9BDC7D', '#5ED3F8', '#F6B637', '#DF6962', '#BD7DDC'];
  const salesColor = ['#F6F6F6', '#EAF7FB', '#F6B637', '#DF6962', '#BD7DDC'];
  const [defaultColor, setDeafultColor] = useState(null);
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    console.log("dashboard")
    // dispatch(dashboardMenu(navigation));
  }, []);

  useEffect(() => {
    const payload = {
      name: changeText,
    };
    // if(dashBoardListData?.[0]?.name=='Todays')
    dispatch(todaysData(navigation, payload));
    // setRecords(todaysListData)
  }, [changeText]);

  useEffect(() => {

    setHeading(dashBoardListData?.[0]?.name);
    setChangeText(dashBoardListData?.[0]?.name.toLowerCase());
    setDeafultColor(dashBoardListData?.[0]?.id);
  }, [dashBoardListData]);

  const changeView = (item) => {
    setPressedButtonId(item?.id);
    setDeafultColor(item?.id);
    // 
    setChangeText(item?.name.toLowerCase());
    setHeading(item?.name);
    dispatch(todaysData(navigation));
    if (item?.name == 'Sales') {
      setShowSales(true);
    } else {
      setShowSales(false);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          changeView(item);
        }}
        style={[
          styles.dashbtn,
          {
            flexDirection: 'row',
            backgroundColor:
              pressedButtonId === item?.id || defaultColor === item?.id ? '#E5F1FF' : 'white',
          },
        ]}
      >
        <Image source={{ uri: item?.iconUrl }} style={{ height: 20, width: 20 }} />
        <Text style={{ color: '#041B3E', marginLeft: 1 }}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };
  const renderItemToday = ({ item }) => {
    return (
      <View style={{ margin: 10 }}>
        <View
          style={[shadow.primaryView, { flexDirection: 'row', justifyContent: 'space-between' }]}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: item?.color ? item?.color : 'white',
                height: 15,
                width: 7,
                borderRadius: 50,
              }}
            ></View>
            <Text style={[styles.fontStyle, { marginHorizontal: 5 }]}>{item?.name}</Text>
          </View>
          <Text style={styles.fontStyle}>{item?.value}</Text>
        </View>
      </View>
    );
  };

  const salesRenterItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <View style={[styles.salesrenderItemView, { backgroundColor: '#F6F6F6' }]}>
          <Text style={{ fontWeight: '700', fontSize: 30, color: '#041B3E' }}>
            {item?.total_count}
          </Text>
          <Text style={{ color: '#757588', fontSize: 14 }}>{item?.lavel}</Text>
          <Text style={{ color: '#041B3E', fontSize: 17 }}>{item?.value}</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: '#041B3E', fontSize: 17 }}>{item?.name}</Text>
        </View>
      </View>
    );
  };

  function renderSalesView() {
    return (
      <View style={[styles.dashSalesView]}>
        <Text style={styles.heading}>{heading}</Text>
        <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 10, marginTop: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{ backgroundColor: '#9BDC7D', height: 18, width: 10, borderRadius: 50 }}
            ></View>
            <Text style={[styles.fontStyle, { marginLeft: 10, fontSize: 17, color: '#041B3E' }]}>
              Sales
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {todaysListData?.length != undefined ? (
              <FlatList
                renderItem={salesRenterItem}
                data={todaysListData}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            ) : (
              <NoRecords />
            )}
          </View>
        </View>
      </View>
    );
  }

  function showDashBoardData() {

    if (
      heading == 'Todays' ||
      heading == 'Leads' ||
      heading == 'Estimates' ||
      heading == 'Jobs' ||
      heading == 'Invoices'
    ) {
      return renderTodayView();
    }
    if (heading == 'Sales') {
      return renderSalesView();
    }
  }

  function renderTodayView() {
    const navigation = useNavigation();
    return (
      <View style={[styles.dashView]}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
          <View>
            <Text style={styles.heading}>{heading}</Text>
          </View>
          {heading == "Estimates" || heading == "Invoices" || heading == "Jobs" ? <View style={{ flexDirection: 'row' }}>
            <Image source={viewAllIcon} style={{ alignSelf: 'center', marginRight: 5 }} />
            {heading == "Jobs" ? <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.allJobs)}>
              <Text style={styles.fontlinkStyle}>View All</Text>
            </TouchableOpacity> : null}
            {heading == "Estimates" ? <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.jobEstimates)}>
              <Text style={styles.fontlinkStyle}>View All</Text>
            </TouchableOpacity> : null}

            {heading == "Invoices" ? <TouchableOpacity onPress={() => navigation.navigate(NAVIGATION.jobInvoices)}>
              <Text style={styles.fontlinkStyle}>View All</Text>
            </TouchableOpacity> : null}

          </View> : null}
        </View>
        <View style={{ width: '100%' }}>
          {todaysListData?.length != undefined ? (
            <FlatList
              renderItem={renderItemToday}
              data={todaysListData}
              // keyExtractor={(item) =>setSelectedId(item.ids)}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <NoRecords />
          )}
        </View>
        <ModalLoader modalView={isFocus} />
      </View>
    );
  }

  return (
    <View style={{ padding: 10 }}>
      {dashBoardListData != undefined ? <FlatList
        data={dashBoardListData}
        renderItem={renderItem}
        // keyExtractor={(item) =>setSelectedId(item.ids)}
        horizontal
        showsHorizontalScrollIndicator={false}
      /> : <NoRecords />}
      <View style={[styles.dashContain]}>{showDashBoardData()}</View>
      <ModalLoader modalView={false} />
    </View>
  );
}
