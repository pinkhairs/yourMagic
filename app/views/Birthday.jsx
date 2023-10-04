import {
  StyleSheet, View, TextInput, StatusBar, KeyboardAvoidingView, Text, ScrollView, Dimensions,
} from 'react-native';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import theme from '../../assets/theme.json';

export default function CreateAccount() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={96}
    >
      <StatusBar bartype="light-content" />
      <View style={styles.mainView}>
        <View style={{
          flex: 1, justifyContent: 'flex-start', marginTop: 16, marginBottom: 40,
        }}
        >
          <Heading lightOnDark addSpacing style={{ fontSize: 14, lineHeight: 20 }}>Set Birthday</Heading>
          <Paragraph
            lightOnDark
            addSpacing
            style={{
              width: Dimensions.get('window').width * 0.75, marginHorizontal: 'auto', alignSelf: 'center', color: '#8A8591',
            }}
          >
            Hi Mika, What’s your sign?
          </Paragraph>
          <Paragraph
            lightOnDark
            style={{
              width: Dimensions.get('window').width * 0.88, marginHorizontal: 'auto', alignSelf: 'center', color: '#8A8591',
            }}
          >
            Don't worry we only use your birth date to give you a special birthday spread and other personalized features and perks.
          </Paragraph>
        </View>
        <View style={{
          borderBottom: '1pt #F9F9EC solid', flex: 1, gap: 32, flexDirection: 'row', alignItems: 'flex-start', marginTop: 40,
        }}
        >
          <TextInput
            style={{
              paddingVertical: 8,
              fontFamily: 'Space Grotesk',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 24,
              letterSpacing: 0.2,
              color: theme.surfaces.light,
              textAlign: 'center',
              borderColor: 'transparent',
              borderBottomColor: theme.surfaces.light,
              borderWidth: 1,
              width: 80,
            }}
            placeholder="MM"
            placeholderTextColor="#F9F9EC"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={{
              paddingVertical: 8,
              fontFamily: 'Space Grotesk',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 24,
              letterSpacing: 0.2,
              color: theme.surfaces.light,
              textAlign: 'center',
              borderColor: 'transparent',
              borderBottomColor: theme.surfaces.light,
              borderWidth: 1,
              width: 80,
            }}
            placeholder="DD"
            placeholderTextColor="#F9F9EC"
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            style={{
              paddingVertical: 8,
              fontFamily: 'Space Grotesk',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: 18,
              lineHeight: 24,
              letterSpacing: 0.2,
              color: theme.surfaces.light,
              textAlign: 'center',
              borderColor: 'transparent',
              borderBottomColor: theme.surfaces.light,
              borderWidth: 1,
              width: 80,
            }}
            placeholder="YYYY"
            placeholderTextColor="#F9F9EC"
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>
      </View>
      <View style={{
        backgroundColor: theme.surfaces.dark, flex: 1, alignItems: 'center', justifyContent: 'flex-end',
      }}
      >
        <Button link="Dashboard" type="inverse" fullWidth text="Sign Up" />
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
