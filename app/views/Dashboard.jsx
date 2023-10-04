import React, {
  View, StatusBar, Image, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../../assets/theme.json';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.surfaces.light,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderTopWidth: 2,
    borderTopColor: theme.surfaces.dark,
    borderBottomWidth: 2,
    borderBottomColor: theme.surfaces.dark,
    height: 240,
  },
  imageBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 'auto',
    height: '100%',
  },
  headerTextContainer: {
    paddingHorizontal: 16,
  },
  paragraphText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 13,
  },
  headingText: {
    fontSize: 20,
    lineHeight: 28,
  },
  listItem: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomColor: theme.surfaces.dark,
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  listItemImage: {
    width: 80,
    height: 80,
  },
  listItemTextContainer: {
    flex: 1,
  },
  listItemHeading: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    marginBottom: 8,
  },
  listItemParagraph: {
    textAlign: 'left',
    fontSize: 15,
    lineHeight: 20,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
};

export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar bartype="dark-content" />
      <View style={styles.header}>
        <Image source={require('../../assets/images/Boost.png')} style={styles.imageBg} />
        <View style={styles.headerTextContainer}>
          <Paragraph addSpacing style={styles.paragraphText}>
            YOUR DAILY DIVINATION, Mika
          </Paragraph>
          <Heading style={styles.headingText}>Your energy is precious and you get to decide where to put it. Also, charge your vibrator</Heading>
        </View>
      </View>
      <View style={{ display: 'flex', paddingBottom: 40 }}>
        <View style={styles.listItem}>
          <Image source={require('../../assets/images/Image.png')} style={styles.listItemImage} />
          <View style={styles.listItemTextContainer}>
            <Heading style={styles.listItemHeading}>
              Your Daily Card
            </Heading>
            <Paragraph style={styles.listItemParagraph}>
              See what energies await you. Tap here for today’s mood.
            </Paragraph>
          </View>
          <Image source={require('../../assets/images/Icons.png')} style={styles.iconImage} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Get a Reading')} style={styles.listItem}>
          <Image source={require('../../assets/images/Image2.png')} style={styles.listItemImage} />
          <View style={styles.listItemTextContainer}>
            <Heading style={styles.listItemHeading}>
              Get a Reading
            </Heading>
            <Paragraph style={styles.listItemParagraph}>
              Stay or go, yes or no? Come to a decision or simply vibe check your life with our illuminating spreads.
            </Paragraph>
          </View>
          <Image source={require('../../assets/images/Icons.png')} style={styles.iconImage} />
        </TouchableOpacity>
        <View style={styles.listItem}>
          <Image source={require('../../assets/images/Image3.png')} style={styles.listItemImage} />
          <View style={styles.listItemTextContainer}>
            <Heading style={styles.listItemHeading}>
              Subscribe
            </Heading>
            <Paragraph style={styles.listItemParagraph}>
              Gain access to our full library of decks and get unlimited assistance from Tarot Bot.
            </Paragraph>
          </View>
          <Image source={require('../../assets/images/Icons.png')} style={styles.iconImage} />
        </View>
      </View>
    </View>
  );
}
