import { StyleSheet, TouchableOpacity, Text, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../../assets/theme.json';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  }

  return (
    <TouchableOpacity onPress={props.backButton ? () => navigation.goBack() : () => navigation.navigate(props.link)} style={[useStyle[props.style].button, props.buttonStyle, props.fullWidth ? { width: Dimensions.get('window').width - 32, height: 48 } : {}]}>
      <Icon name={props.icon} size={20} color={useStyle[props.style].text} />
      <Text style={[useStyle[props.style].text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  solidButton: {
    fontWeight: 400,
    color: theme.surfaces.light,
    marginBottom: 20,
    backgroundColor: theme.surfaces.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  solidText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: theme.surfaces.light,
    lineHeight: 16,
  },
  inverseButton: {
    fontWeight: 400,
    marginBottom: 20,
    backgroundColor: theme.surfaces.light,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  inverseText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: theme.surfaces.dark,
    lineHeight: 16,
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
  },
  outlineText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 12,
    color: theme.surfaces.dark,
    lineHeight: 16,
  },
  invisibleButton: {
    fontWeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    gap: 8,
  },
  invisibleText: {
    fontFamily: 'Space Grotesk',
    textAlign: 'center',
    fontSize: 24,
    color: theme.surfaces.dark,
  },
});
