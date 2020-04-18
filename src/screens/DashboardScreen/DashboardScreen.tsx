import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import DonorDashboardScreen from '../DonorDashboardScreen';
import ClientDashboardScreen from '../ClientDashboardScreen';

const DashboardScreen = () => {
	const [ state ] = useGlobal();
	const { userIdentity } = state;

	if (userIdentity === 'donor') {
		return DonorDashboardScreen();
	}
	return ClientDashboardScreen();
};

export default DashboardScreen;
