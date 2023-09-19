import {
  StyleSheet, View, TextInput, Dimensions, StatusBar, KeyboardAvoidingView, ScrollView,
} from 'react-native';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import theme from '../../assets/theme.json';
import Heading from '../components/Heading';

export default function CreateAccount() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.mainView}>
          <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 16 }}>
            <Heading lightOnDark addSpacing style={{ fontSize: 14, lineHeight: 20 }}>Create Account</Heading>
            <Paragraph
              lightOnDark
              style={{
                width: Dimensions.get('window').width * 0.75, marginHorizontal: 'auto', alignSelf: 'center', color: '#8A8591',
              }}
            >
              Create an account to access daily divinations, youpr card of the day, Tarot Bot readings, indie decks & more.
            </Paragraph>
          </View>
          <View style={{
            borderBottom: '1pt #F9F9EC solid', flex: 1, gap: 16, alignItems: 'flex-start', marginTop: 40,
          }}
          >
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
              }}
              placeholder="Chosen Name"
              placeholderTextColor="#F9F9EC"
              autoCapitalize="words"
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
        </View>
      </ScrollView>
      <View style={{
        flex: 1, justifyContent: 'flex-end', marginBottom: 16, alignItems: 'center',
      }}
      >
        <View>
          <Button link="Set Birthday" style="inverse" fullWidth text="Continue" />
          <Button link="Login" style="solid" fullWidth text="Already have an account? Sign in here" />
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
