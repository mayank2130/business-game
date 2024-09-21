import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import TroublesScreen from '@/components/Troubles'
import { useNavigation } from 'expo-router';

const Trouble = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Legal Troubles",
      // headerTransparent: true,
    });
  }, []);

  return (
    <TroublesScreen />
  )
}

export default Trouble

const styles = StyleSheet.create({})