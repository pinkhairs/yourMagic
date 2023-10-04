import {
  StyleSheet, View, TextInput, Dimensions, StatusBar, KeyboardAvoidingView,
} from 'react-native';
import Button from '../components/Button';
import Heading from '../components/Heading';
import theme from '../../assets/theme.json';

export default function CreateAccount() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.mainView}>
        <StatusBar bartype="light-content" />
        <View style={{
          borderBottom: '1pt #F9F9EC solid', flex: 1, gap: 24, alignItems: 'center', marginTop: 16,
        }}
        >
          <Heading
            lightOnDark
            addSpacing
            style={{
              fontSize: 14, lineHeight: 20,
            }}
          >
            Login
          </Heading>
          <TextInput
            style={{
              paddingVertical: 8,
              fontFamily: 'Space Grotesk',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 16,
              lineHeight: 22,
              letterSpacing: 0.2,
              color: theme.surfaces.light,
              textAlign: 'left',
              borderColor: 'transparent',
              borderBottomColor: theme.surfaces.light,
              borderWidth: 1,
              width: Dimensions.get('window').width - 32,
              marginTop: 16,
            }}
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#F9F9EC"
            autoCapitalize="none"
          />
          <TextInput
            style={{
              paddingVertical: 8,
              fontFamily: 'Space Grotesk',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 16,
              lineHeight: 22,
              letterSpacing: 0.2,
              color: theme.surfaces.light,
              textAlign: 'left',
              borderColor: 'transparent',
              borderBottomColor: theme.surfaces.light,
              borderWidth: 1,
              width: Dimensions.get('window').width - 32,
              marginTop: 16,
              marginBottom: 16,
            }}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#F9F9EC"
          />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Button link="Dashboard" type="inverse" fullWidth text="Log In" />
          <Button link="Reset Password" type="tertiary" fullWidth text="Forgot Password?" />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: theme.surfaces.dark,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
