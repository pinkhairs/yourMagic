import { View, StatusBar } from 'react-native';

export default function Dashboard() {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
    </View>
  );
}
