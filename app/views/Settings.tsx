import { View, StatusBar, Image, Switch, TextInput, Dimensions } from 'react-native';
import theme from '../../assets/theme.json';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

export default function Dashboard() {
  return (
    <View style={{flex: 1, backgroundColor: theme.surfaces.light}}>
      <StatusBar bartype="dark-content" />
      <View style={{ flex: 1, alignItems: 'flex-start', borderTopWidth: 2, borderTopColor: theme.surfaces.dark }}>
        <View style={{flexDirection: 'row', gap: 24, alignItems: 'center', paddingVertical: 32, borderBottomWidth: 1, borderBottomColor: theme.neutrals['100'], paddingHorizontal: 16}}>
          <View style={{flex: 1}}>
            <Heading addSpacing style={{fontSize: 19, lineHeight: 24, textAlign: 'left'}}>My Notifications</Heading>
            <Paragraph style={{fontSize: 13, marginBottom: 8, lineHeight: 16, textAlign: 'left'}}>Mobile push notifications</Paragraph>
            <Paragraph style={{fontSize: 12, lineHeight: 16, textAlign: 'left', color: theme.neutrals['300']}}>Receive push notifications about your daily updates and exclusives via your mobile app. </Paragraph>
          </View>
          <Switch style={{marginTop: 16}} />
        </View>
        <View style={{paddingVertical: 32, borderBottomWidth: 1, borderBottomColor: theme.neutrals['100'], paddingHorizontal: 16}}>
          <Heading addSpacing style={{fontSize: 14, lineHeight: 20, textAlign: 'left'}}>My Account</Heading>
          <View style={{marginBottom: 16}}>
            <View style={{borderBottomColor: theme.surfaces.dark, borderBottomWidth: 1, flexDirection: 'row', gap: 8, paddingBottom: 8}}>
              <Paragraph style={{fontSize: 12, color: theme.neutrals['300'], lineHeight: 16, textAlign: 'left'}}>Email</Paragraph>
              <TextInput keyboardType="email-address" style={{width: Dimensions.get('window').width - 32}} placeholder="you@example.com" />
            </View>
          </View>
          <View style={{marginBottom: 16}}>
            <View style={{borderBottomColor: theme.surfaces.dark, borderBottomWidth: 1, flexDirection: 'row', gap: 8, paddingBottom: 8}}>
              <Paragraph style={{fontSize: 12, color: theme.neutrals['300'], lineHeight: 16, textAlign: 'left'}}>Birthday</Paragraph>
              <TextInput style={{width: Dimensions.get('window').width - 32}} placeholder="12/10/1991" />
            </View>
          </View>
          <Button link="Dashboard" text="Change My Password" type="outline" fullWidth />
        </View>
        <View style={{paddingVertical: 32, paddingHorizontal: 16}}>
          <Heading addSpacing style={{fontSize: 14, lineHeight: 20, textAlign: 'left'}}>My Subscription</Heading>
          <View style={{marginBottom: 16}}>
            <View style={{borderBottomColor: theme.surfaces.dark, borderBottomWidth: 1, flexDirection: 'row', gap: 8, paddingVertical: 16, justifyContent: 'space-between'}}>
              <Paragraph style={{fontSize: 12, lineHeight: 16, textAlign: 'left'}}>Subscription Details</Paragraph>
              <Image source={require('../../assets/images/Icons.png')} style={{width: 16, height: 16}} />
            </View>
            <View style={{borderBottomColor: theme.surfaces.dark, borderBottomWidth: 1, flexDirection: 'row', gap: 8, paddingVertical: 16, justifyContent: 'space-between'}}>
              <Paragraph style={{fontSize: 12, lineHeight: 16, textAlign: 'left'}}>Manage Subscription</Paragraph>
              <Image source={require('../../assets/images/Icons.png')} style={{width: 16, height: 16}} />
            </View>
          </View>
          <Button link="Welcome" text="Log Out" type="redOutline" fullWidth />
        </View>
      </View>
    </View>
  );
}
