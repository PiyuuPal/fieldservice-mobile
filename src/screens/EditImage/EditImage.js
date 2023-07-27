import { spacing } from '@/theme';
import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView, TextInput,TouchableOpacity } from 'react-native-gesture-handler';

export function EditImage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: spacing.m }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>File Name</Text>
          <TextInput style={{ borderBottomWidth: 1, backgroundColor: 'white', marginTop: 10 }} />
          <Text>Descrption</Text>
          <TextInput
            multiline
            style={{ borderBottomWidth: 1, backgroundColor: 'white', marginTop: 10 }}
          />
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'purple',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 50,
            }}
            // onPress={jobTagFun}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
