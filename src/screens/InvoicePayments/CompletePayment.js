import { noAvailableImg, paymentImg } from '@/assets';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CompletePayment = () => {
  return (
    <View style={styles.container}>
      <Image
        source={paymentImg}
        style={styles.successImage}
      />
      <Text style={styles.successText}>Payment successful!</Text>
      <Text style={styles.successSubText}>Thank you for your purchase.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImage: {
    width: 200,
    height: 200,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color:'black',
  },
  successSubText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default CompletePayment;
