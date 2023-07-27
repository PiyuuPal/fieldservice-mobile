import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './InvoiceItems.styles';
import { backIcon, backgroundImage, edit, search } from '@/assets';
import { shadow, spacing } from '@/theme';
import { useDispatch, useSelector } from 'react-redux';
import { Invoicedetails, invoiceItemDetail, invoiceUpdateItem } from '@/actions/UserActions';
import { NAVIGATION } from '@/constants';



const AddQuantityItems = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0);

    const newItem_id = route.params?.invoiceItemid;
    console.log('InvoiceiD:---', route?.params)
    console.log('ItemiD:---', newItem_id)
    const invoiceid = useSelector((state) => state.user.invoiceDetails?.invoiceDetails?.id);
    const invoicesListItems = useSelector((state) => state?.user?.listofInvoiceItems);
    const selectItemData = invoicesListItems.find((item) => item.id == newItem_id);
    console.log(selectItemData, '==lllll');

    // const handleInvoiceQuantityItem = () => {
    //     let payload = {
    //         // "cost":"25",
    //         price: selectItemData?.price,
    //         quantity: value,
    //         item_name: selectItemData?.item_name,
    //         invoice_id: selectItemData?.invoice_id,
    //         item_id: selectItemData?.id,
    //         // "item_description":"Hello",
    //         taxable: "on"
    //     }
    //     console.log("payload", payload);
    //     dispatch(invoiceUpdateItem(payload, navigation))

    // }

    const handleInvoiceQuantityItem = ()=>{
        let data = {
          item_id:selectItemData?.id,
          quantity:value,
          invoice_id:invoiceid
      }
      console.log('item dtttt--',data)
        dispatch(invoiceItemDetail(data,navigation))
      }
    


    const increaseValue = () => {
        setValue(value + 1);
    };

    const decreaseValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const allItemsQuantity = selectItemData?.price * value;
    console.log('sss---', allItemsQuantity)

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ImageBackground style={styles.container1} source={backgroundImage}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={backIcon} style={{ marginTop: 5 }} />
                        </TouchableOpacity>
                        <Text style={[styles.txttitle, { marginLeft: 'auto', marginRight: 30 }]}>Edit</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={shadow.shadowImage}>
                {/* <ImageBackground style={{ flexDirection: 'row', padding: 20 }} source={backgroundImage}> */}
                <View style={{ marginHorizontal: spacing.xx, marginVertical: 50 }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '600', textTransform: 'capitalize' }}>{selectItemData?.item_name}</Text>
                    <View style={{ height: 1, width: '100%', backgroundColor: '#ECECEC', marginVertical: spacing.xx }}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ alignSelf: 'center', color: '#041B3E', fontWeight: '600', fontSize: 20 }}>$ {selectItemData?.price}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 'auto', padding: 10, justifyContent: 'space-around' }}>

                            <TouchableOpacity style={styles.btnDecrease} onPress={decreaseValue}>
                                <Text style={styles.btnDecText}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ padding: 10, color: "black", fontWeight: '600', fontSize: 18 }}>{value}</Text>
                            <TouchableOpacity style={styles.btnDecrease} onPress={increaseValue}>
                                <Text style={styles.btnDecText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* </ImageBackground> */}

                {value > 0 ? <TouchableOpacity style={{ padding: 10, backgroundColor: '#041B3E', marginHorizontal: 20, borderRadius: 30, position: 'absolute', bottom: -420, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }}
                    //  onPress={()=>navigation.navigate(NAVIGATION.CreateInvoice)}
                    onPress={handleInvoiceQuantityItem}
                >
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600', fontSize: 20 }}>Add Invoices $ {allItemsQuantity}</Text>
                </TouchableOpacity> : null}


            </View>

        </SafeAreaView>
    )
}

export default AddQuantityItems;
