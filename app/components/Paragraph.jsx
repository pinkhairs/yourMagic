import { StyleSheet, Text } from 'react-native';
import theme from '../../assets/theme.json';

export default function Heading(props) {
  let style = props.addSpacing ? [styles.paragraph, styles.paragraphSpacing] : styles.paragraph;
  style = props.lightOnDark ? [style, styles.lightOnDark] : style;
  style = [style, props.style];
  return <Text {...props} style={style}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: 'Space Grotesk',
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 24,
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
