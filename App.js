import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';


export default function App() {

  const [type, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () =>{
      const {status} = await Camera.requestCameraPermissionsAsync
      requestPermission(status === "granted");
    })();
  }, [])

  if(permission == null){
    return <View></View>
  }
  if(permission == false){
    return <Text>Acesso negado otario</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
        <Camera
        style={styles.camera}
        type={type}
        >

        </Camera>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera:{
      width: "100%",
      height: "100%",
  }
});
