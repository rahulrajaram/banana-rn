import React, { useEffect, useState } from 'react';
import { useIsFocused } from 'react-navigation-hooks';
import { ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import useGlobal from '@state';
import { SpacerInline } from '@elements';
import Donation from './Donation';

interface LocalProps {
	resource: 'donations';
}

function getScrollViewOfDonations(donations) {
	return <ScrollView>
		{
			(donations as any).map((donation, i) => (
				<View key={donation.id}>
					<Divider style={{ backgroundColor: 'blue' }} />
					<Donation
						donation={donation}
						key={donation.id}
						resource='donations'
					/>
					{
						i === (donations as any).length - 1
							&& <Divider style={{ backgroundColor: 'blue' }} />
					}
				</View>
			))
		}
		<SpacerInline height={200} />
	</ScrollView>;
}

function getEmptyScrollView() {
	return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<View>
			<Text>No donations to display</Text>
		</View>
	</View>;
}

export default ({ resource }: LocalProps) => {
	const isFocused = useIsFocused();
	const [ state, actions ] = useGlobal() as any;

	const [ donations, setDonationsOrClaims ] = useState(state.donations);
	const [ loaded, setLoaded ] = useState(false);

	const getDonationsFromApi = async () => {
		const { getDonations } = actions;
		const data = await getDonations(resource);
		if (data) {
			await setDonationsOrClaims(data);
			setLoaded(true);
		}
	};

	useEffect(() => {
		if (isFocused) {
			getDonationsFromApi();
		}
	}, [ isFocused ]);

	if (!loaded) { return <Text>Loading...</Text>; }

	if (Array.isArray(donations) && donations !== []) {
		return getScrollViewOfDonations(donations);
	}

	return getEmptyScrollView();
};
