import { timeSheetIcon } from '@/assets'
import { shadow } from '@/theme'
import React, { Component, useEffect } from 'react'
import { Text, View, FlatList,Image} from 'react-native'
import { styles } from './Home.styles'
import { useDispatch, useSelector } from 'react-redux'
import { topTechnicians } from '@/actions/HomeActions'
import { NoRecords } from '@/components/NoRecords'

export function TopPerformingTechnicians({navigation}) {
    const dataToday = [{ id: "Sales", no: '1', name: 'prashant' }, { id: "Collected", no: '2', name: 'Praveen' }, { id: "Jobs Done", no: '3', name: 'Chaman' }, { id: "Jobs Canceled", no: '4', name: 'Gautam' }, { id: "Jobs Created", no: '5', name: 'Arvind' }]
    const topTechListData = useSelector((state) => state?.home?.topTechList);
    
    const dispatch=useDispatch() 
    useEffect(()=>{
        console.log("toptechnicians")
        // dispatch(topTechnicians(navigation))
     },[])
   
    const renderTopTech = ({ item }) => {
        return (
            <View style={{padding:10}}>
                <View style={[shadow.primaryView, { flexDirection: "row", justifyContent: "space-between",padding:8}]}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{justifyContent:'center',alignItems:"center"}}>
                           <Image source={{uri:item?.userImage}} style={{height:30,width:30}}/>
                        </View>
                        <View style={{justifyContent:'center',marginLeft:10}}>
                        <Text style={{fontSize:17,fontWeight:'600',color:"#041B3E"}}>{item?.firstname}{item?.lastname}</Text>
                        <Text style={styles.fontStyle}>{item?.totalJob}</Text>
                        </View>

                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#195090", fontSize: 16 }}>${item?.totalAmount}</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View>
            {topTechListData?.length!= undefined ?<FlatList
                renderItem={renderTopTech}
                data={topTechListData}
                // keyExtractor={(item) =>setSelectedId(item.ids)}
                showsVerticalScrollIndicator={false}
            />:<NoRecords/>}
        </View>
    )
}
