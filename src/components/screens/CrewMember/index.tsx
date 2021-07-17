import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {openSettings, RESULTS} from 'react-native-permissions';
import {
  usePermission,
  permissionStrings,
} from '../../../modules/hooks/usePermissions';
import useSpaceXContext from '../../../modules/hooks/useSpaceXData';
import {handleError} from '../../../util/error';
import Card from '../../card/Card';

interface Item {
  name: string;
  agency: string;
  image: string;
}

const openAppSettings = async () => {
  try {
    await openSettings();
  } catch (e) {
    handleError(e.message);
  }
};

const showAlert = () =>
  Alert.alert('Give permissions', 'Permissions dialog', [
    {
      text: 'Give permissions',
      onPress: () => openAppSettings(),
      style: 'default',
    },
  ]);

const CrewMember = (item: Item) => {
  const ctx = useSpaceXContext();
  const navigation = useNavigation();

  const [cameraPermissionStatus, checkCameraPermission] = usePermission(
    permissionStrings.camera,
  );
  const [galleryPermissionStatus, checkGalleryPermission] = usePermission(
    permissionStrings.gallery,
  );
  const [trackingPermissionStatus, checkTrackingPermission] = usePermission(
    permissionStrings.tracking,
  );

  useFocusEffect(
    useCallback(() => {
      checkCameraPermission();
      checkGalleryPermission();
      checkTrackingPermission();
    }, [navigation]),
  );

  useEffect(() => {
    cameraPermissionStatus === RESULTS.BLOCKED && showAlert();
    galleryPermissionStatus === RESULTS.BLOCKED && showAlert();
    trackingPermissionStatus === RESULTS.BLOCKED && showAlert();
  }, [
    cameraPermissionStatus,
    galleryPermissionStatus,
    trackingPermissionStatus,
  ]);

  return (
    <View style={styles.container}>
      {cameraPermissionStatus === RESULTS.GRANTED &&
      galleryPermissionStatus === RESULTS.GRANTED &&
      Platform.OS === 'ios'
        ? trackingPermissionStatus === RESULTS.GRANTED
        : true && <Card {...ctx.state.member} kind="member" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CrewMember;
