import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobal from '@state';
import { Title, SpacerInline, Header } from '@elements';
import Claims from '../../elements/Claims/Claims';
import styles from './ClaimScreen.styles';

function getBackButtonViewComponent() {
	const title = 'Open Donations.';

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

const ClientDashboardScreen = () => {
	const [ state ] = useGlobal();

	return (
		<View style={styles.outerContainer}>
			{getBackButtonViewComponent()}
			<Claims resource="claims" />
			{getDonationScreenNavigationButton()}
		</View>
	);
};

export default ClientDashboardScreen;
