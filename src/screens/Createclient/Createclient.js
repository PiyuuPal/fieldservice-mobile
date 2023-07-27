import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { createClient } from '@/actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION } from '@/constants';
import Feather from 'react-native-vector-icons/Feather';
import { useEffect } from 'react';

const initialValues = {
  first_name: '',
  last_name: '',
  company_name: '',
  phone: '',
  email: '',
  ad_source_id: '',
  is_allow_billing: '',
  address1: '',
  city: '',
  state: '',
  zip: '',
  country: '',
};

const Createclient = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(createClient(values, navigation));
    // Perform actions with the form values, such as sending them to an API
  };

  const { address, city, country, state, zipCode } = useSelector((state) => state?.user?.storeGoogleAddreesListReducer) || {};


  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => {
              useEffect(() => {
                if (address && city && country && state && zipCode) {
                  // Populate the fields from the useSelector hook
                  setFieldValue('address1', address);
                  setFieldValue('city', city);
                  setFieldValue('country', country);
                  setFieldValue('state', state);
                  setFieldValue('zip', zipCode);
                }
              }, [address, city, country, state, zipCode]);

              return (
                <View>
                 
                  <View style={styles.inputContainer}>
                  <Text style={styles.label}>First Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                value={values.first_name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                value={values.last_name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Company Name:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('company_name')}
                onBlur={handleBlur('company_name')}
                value={values.company_name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Phone Number:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ad Source ID:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('ad_source_id')}
                onBlur={handleBlur('ad_source_id')}
                value={values.ad_source_id}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Allow Billing:</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('is_allow_billing')}
                onBlur={handleBlur('is_allow_billing')}
                value={values.is_allow_billing}
              />
            </View>
            <View style={styles.inputContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NAVIGATION.address);
              }}
              style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between', padding: 10 }}
            >
                <Text>Address</Text>
              <Feather name="chevron-right" size={20} />
            </TouchableOpacity>
                    <Text style={styles.label}>Address :</Text>
                    <TextInput
                     style={[styles.input, styles.disabledInput]}
                      editable={false}
                      onChangeText={handleChange('address1')}
                      onBlur={handleBlur('address1')}
                      value={values.address1}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>City:</Text>
                    <TextInput
                      style={[styles.input, styles.disabledInput]}
                      onChangeText={handleChange('city')}
                      onBlur={handleBlur('city')}
                      value={values.city}
                      editable={false}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>State:</Text>
                    <TextInput
                     style={[styles.input, styles.disabledInput]}
                      onChangeText={handleChange('state')}
                      onBlur={handleBlur('state')}
                      value={values.state}
                      editable={false}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>ZIP:</Text>
                    <TextInput
                     
                      editable={false}
                      onChangeText={handleChange('zip')}
                      onBlur={handleBlur('zip')}
                      value={values.zip}
                      style={[styles.input, styles.disabledInput]}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Country:</Text>
                    <TextInput
                     style={[styles.input, styles.disabledInput]}
                     editable={false}
                      onChangeText={handleChange('country')}
                      onBlur={handleBlur('country')}
                      value={values.country}
                    />
                  </View>
                  
                  <Button onPress={handleSubmit} title="Submit" />
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  disabledInput: {
    backgroundColor: '#F2F2F2',
    color: '#999999',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
});

export default Createclient;
