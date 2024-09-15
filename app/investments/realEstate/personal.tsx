import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';
import PersonalPropertyTabs from '@/app/PersonalPropertyTabs';

const CommercialProperties = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      // headerTransparent: true,
    });
  }, []);

  return (
    <PersonalPropertyTabs />
  )
}

export default CommercialProperties

const styles = StyleSheet.create({})