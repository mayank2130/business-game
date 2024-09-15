import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';
import CommercialPropertyTabs from '@/app/CommercialPropertyTabs';

const CommercialProperties = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      // headerTransparent: true,
    });
  }, []);

  return (
    <CommercialPropertyTabs />
  )
}

export default CommercialProperties

const styles = StyleSheet.create({})