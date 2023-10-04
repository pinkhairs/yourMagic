import { StyleSheet, Text } from 'react-native';
import theme from '../../assets/theme.json';

export default function Heading(props) {
  let style = props.addSpacing ? [styles.h1, styles.paragraphSpacing] : styles.h1;
  style = props.lightOnDark ? [style, styles.lightOnDark] : style;
  style = [style, props.style];

  const h1 = <Text style={style}>{props.children}</Text>;
  return h1;
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Dela Gothic One',
    fontWeight: 400,
    fontSize: 38,
    lineHeight: 40,
    textAlign: 'center',
    color: theme.surfaces.dark,
  },
  paragraphSpacing: {
    marginBottom: 16,
  },
  lightOnDark: {
    color: theme.surfaces.light,
  },
});
