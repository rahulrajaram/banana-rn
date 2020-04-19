import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import { Title, SpacerInline, Header } from '@elements';
import Donations from '../../library/Donations/Donations';
import styles from './ClientDashboardScreen.styles';

function getBackButtonViewComponent() {
	const title = 'Open donations';

	return <View>
		<Header showBackButton={false} />
		<Title text={title} />
		<SpacerInline height={20} />
	</View>;
}

function getDonationScreenNavigationButton() {
	const { navigate } = useNavigation();

	<View style={styles.addButton}>
		<TouchableOpacity onPress={() => navigate('ClientDonationScreen', {})}>
			<Text style={styles.plus}/>
		</TouchableOpacity>
	</View>
}

const DonorDashboardScreen = () => {
	const [ state ] = useGlobal();

	return (
		<View style={styles.outerContainer}>
			{getBackButtonViewComponent()}
			<Donations resource="donations" />
			{getDonationScreenNavigationButton()}
		</View>
	);
};

export default DonorDashboardScreen;
