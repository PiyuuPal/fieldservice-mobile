import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Actions = () => {
  // Sample data for actions
  const actions = [
    { action_text: 'Action 1', updated_by: 'User 1', updated_on: '2023-05-31' },
    { action_text: 'Action 2', updated_by: 'User 2', updated_on: '2023-05-30' },
    { action_text: 'Action 3', updated_by: 'User 3', updated_on: '2023-05-29' },
    // Add more actions as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {actions.map((action, index) => (
          <View style={styles.actionContainer} key={index}>
            <Text style={styles.actionText}>{action.action_text}</Text>
            <Text style={styles.updatedBy}>Updated by: {action.updated_by}</Text>
            <Text style={styles.updatedOn}>Updated on: {action.updated_on}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  actionContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  actionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  updatedBy: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 4,
  },
  updatedOn: {
    fontSize: 14,
    color: '#555555',
  },
});

export default Actions;
