import React, {
  StyleSheet, View, StatusBar, Image,
} from 'react-native';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Slideshow from '../components/Slideshow';
import Button from '../components/Button';
import theme from '../../assets/theme.json';

export default function Onboarding() {
  return (
    <View style={styles.mainView}>
      <StatusBar bartype="dark-content" />
      <Slideshow>
        <View style={{
          textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
        }}
        >
          <Image source={require('../../assets/images/Logo.png')} width={240} />
          <Paragraph>Tarot in your pocket.</Paragraph>
        </View>
        <View style={{ marginTop: 24, paddingHorizontal: 8 }}>
          <Heading addSpacing>Divine Your Destiny</Heading>
          <Paragraph>Explore our library of indie decks to find your perfect match. Choose from our custom spreads to get real with yourself - whether you're tangled up in drama, love sick, career blocked, or looking to skip town.</Paragraph>
        </View>
        <View style={{ marginTop: 24, paddingHorizontal: 8 }}>
          <Heading addSpacing>Learn As You Go</Heading>
          <Paragraph addSpacing>Hone your understanding of the cards through bespoke interpretations from tarot expert Michelle Tea.</Paragraph>
          <Paragraph>Document patterns in your personal archive of readings. Still need help interpreting? Call on the Tarot Bot!</Paragraph>
        </View>
      </Slideshow>
      <View>
        <Button type="solid" fullWidth link="Create Account" text="Continue With Email" />
      </View>
      <View style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16,
      }}
      >
        <View style={{ height: 1, backgroundColor: theme.surfaces.dark, width: 140 }} />
        <Paragraph style={{ paddingHorizontal: 28, fontSize: 14 }}>OR</Paragraph>
        <View style={{ height: 1, backgroundColor: theme.surfaces.dark, width: 140 }} />
      </View>
      <Button type="outline" fullWidth text="Continue With Google" icon="google" />
      <Button type="outline" fullWidth text="Continue With Facebook" icon="facebook" />
      <Button type="outline" fullWidth link="Login" text="Log In" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#FF1E00',
    alignItems: 'center',
    paddingBottom: 24,
  },
});
