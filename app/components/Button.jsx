import {
  StyleSheet, TouchableOpacity, Text, Dimensions, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../assets/theme.json';

export default function Button(props) {
  const navigation = useNavigation();
  const useStyle = {
    inverse: {
      button: styles.inverseButton,
      text: styles.inverseText,
    },
    solid: {
      button: styles.solidButton,
      text: styles.solidText,
    },
    outline: {
      button: styles.outlineButton,
      text: styles.outlineText,
    },
    invisible: {
      button: styles.invisibleButton,
      text: styles.invisibleText,
    },
    redOutline: {
      button: styles.redOutlineButton,
      text: styles.redOutlineText,
    },
    tertiary: {
      button: styles.tertiaryButton,
      text: styles.tertiaryText,
    },
  };

  return (
    <TouchableOpacity onPress={props.backButton ? () => navigation.goBack() : () => navigation.navigate(props.link)} style={[useStyle[props.type].button, props.buttonStyle, props.fullWidth ? { width: Dimensions.get('window').width - 32, height: 48 } : {}]}>
      <Icon name={props.icon} size={props.icon === 'facebook' ? 22 : 18} color={useStyle[props.type].text} />
      <Text style={[useStyle[props.type].text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  solidButton: {
    fontWeight: 400,
    marginBottom: 20,
    backgroundColor: theme.surfaces.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 4,
  },
  solidText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#ff1f02',
    lineHeight: 16,
    position: 'relative',
    top: 2,
    letterSpacing: 1,
  },
  inverseButton: {
    fontWeight: 400,
    marginBottom: 20,
    backgroundColor: theme.surfaces.light,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 4,
  },
  inverseText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: theme.surfaces.dark,
    lineHeight: 16,
    letterSpacing: 1,
  },
  outlineButton: {
    fontWeight: 400,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.surfaces.dark,
    backgroundColor: 'rgba(249, 249, 236, 0.1)',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 4,
  },
  outlineText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: theme.surfaces.dark,
    lineHeight: 16,
    position: 'relative',
    top: 2,
    letterSpacing: 1,
  },
  redOutlineButton: {
    fontWeight: 400,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF1E00',
    backgroundColor: 'rgba(249, 249, 236, 0.1)',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 4,
  },
  redOutlineText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#FF1E00',
    lineHeight: 16,
    letterSpacing: 1,
  },
  invisibleButton: {
    fontWeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    gap: 8,
    borderRadius: 4,
  },
  invisibleText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    fontSize: 24,
    color: theme.surfaces.dark,
    letterSpacing: 1,
  },
  tertiaryButton: {
    fontWeight: 400,
    marginBottom: 20,
    backgroundColor: theme.surfaces.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    borderRadius: 4,
  },
  tertiaryText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    fontSize: 12,
    color: theme.surfaces.light,
    lineHeight: 16,
    position: 'relative',
    top: 2,
    textDecorationLine: 'underline',
  },
});
