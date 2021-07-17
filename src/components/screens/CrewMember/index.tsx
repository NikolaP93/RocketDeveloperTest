import React from 'react';
import {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {usePermission, permissionStrings} from '../../../modules/hooks/usePermissions';

interface Props {}

const CrewMember = (props: Props) => {
  const [cameraPermissionStatus, checkCameraPermission] = usePermission(
    permissionStrings.camera,
  );
  const [galleryPermissionStatus, checkGalleryPermission] = usePermission(
    permissionStrings.gallery,
  );
  const [trackingPermissionStatus, checkTrackingPermission] = usePermission(
    permissionStrings.tracking,
  );

  useEffect(() => {
    checkCameraPermission();
    checkGalleryPermission();
    checkTrackingPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>CrewMember Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CrewMember;
