import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, {
  View, TextInput, TouchableOpacity, Text, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Career from './Tabs/Career';
import Conflict from './Tabs/Conflict';
import Love from './Tabs/Love';
import Place from './Tabs/Place';
import VibeCheck from './Tabs/VibeCheck';
import theme from '../../assets/theme.json';

const Tab = createMaterialTopTabNavigator();

function GetReading() {
  const careerIcon = (tintColor, focused) => (
    <Image source={focused ? require('../../assets/images/careericon-active.png') : require('../../assets/images/careericon.png')} style={{ height: 24, width: 24 }} />
  );
  const conflictIcon = (tintColor, focused) => (
    <Image source={focused ? require('../../assets/images/conflicticon-active.png') : require('../../assets/images/conflicticon.png')} style={{ height: 24, width: 24 }} />
  );
  const loveIcon = (tintColor, focused) => (
    <Image source={focused ? require('../../assets/images/loveicon-active.png') : require('../../assets/images/loveicon.png')} style={{ height: 24, width: 24 }} />
  );
  const homeIcon = (tintColor, focused) => (
    <Image source={focused ? require('../../assets/images/homeicon-active.png') : require('../../assets/images/homeicon.png')} style={{ height: 24, width: 24 }} />
  );
  const vibeCheckIcon = (tintColor, focused) => (
    <Image source={focused ? require('../../assets/images/vibecheckicon-active.png') : require('../../assets/images/vibecheckicon.png')} style={{ height: 24, width: 24 }} />
  );

  return (
    <View style={{ flex: 1, backgroundColor: theme.surfaces.light }}>
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Tab.Navigator screenOptions={
          {
            tabBarLabelStyle: {
              fontSize: 11, fontFamily: 'Space Grotesk', opacity: 1, color: theme.surfaces.dark, paddingHorizontal: 0,
            },
            tabBarItemStyle: { paddingHorizontal: 0 },
            tabBarStyle: {
              backgroundColor: theme.surfaces.light, width: '90%', marginLeft: '5%',
            },
            tabBarIndicatorStyle: { backgroundColor: theme.surfaces.dark },
          }
        }
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ tintColor, focused }) => careerIcon(null, focused),
            }}
            name="Career"
            component={Career}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ tintColor, focused }) => conflictIcon(null, focused),
            }}
            name="Conflict"
            component={Conflict}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ tintColor, focused }) => loveIcon(null, focused),
            }}
            name="Love"
            component={Love}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ tintColor, focused }) => homeIcon(null, focused),
            }}
            name="Place"
            component={Place}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ tintColor, focused }) => vibeCheckIcon(null, focused),
            }}
            name="VibeCheck"
            component={VibeCheck}
          />
        </Tab.Navigator>
      </View>
      <View style={{ flex: 1, backgroundColor: theme.surfaces.light }}>
        <View style={{
          borderColor: 'black', borderWidth: 1, borderRadius: 4, padding: 8,
        }}
        >
          <TextInput placeholder="SEARCH FOR A SPREAD" />
        </View>

        {/* Card-based Options */}
        <View style={{ marginVertical: 20 }}>
          {[
            { title: 'Single Card', desc: 'For daily readings and yes or no questions' },
            { title: 'Past, Present, Future', desc: 'Simple spread built to give you a general comprehension' },
            { title: 'Situation, Action, Outcome', desc: 'Easy spread to understand how you can affect a particular situation' },
            { title: 'Three Options', desc: 'A spread to help you think through three choices' },
          ].map((card) => (
            <TouchableOpacity
              key={card.title}
              style={{
                padding: 16, marginVertical: 8, borderColor: 'gray', borderWidth: 1, borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{card.title}</Text>
              <Text style={{ fontSize: 14 }}>{card.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

export default GetReading;
