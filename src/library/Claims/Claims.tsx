import React, { useEffect, useState } from 'react';
import { useIsFocused } from 'react-navigation-hooks';
import { ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-paper';
import useGlobal from '@state';
import { SpacerInline } from '@elements';
import Claim from './Claim';

interface LocalProps {
	resource: 'claims';
}

function getScrollViewOfDonations(claims) {
	return <ScrollView>
		{
			(claims as any).map((claims, i) => (
				<View key={claims.id}>
					<Divider style={{ backgroundColor: 'blue' }} />
					<Claim
						claim={claims}
						key={claims.id}
						resource='claims'
					/>
					{
						i === (claims as any).length - 1
							&& <Divider style={{ backgroundColor: 'blue' }} />
					}
				</View>
			))
		}
		<SpacerInline height={200} />
	</ScrollView>;
}

function getNotDonationsView() {
	return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<View>
			<Text>No donations to display</Text>
		</View>
	</View>
}

export default ({ resource }: LocalProps) => {
	const isFocused = useIsFocused();
	const [ state, actions ] = useGlobal() as any;

	const [ claims, setDonationsOrClaims ] = useState(state.claims);
	const [ loaded, setLoaded ] = useState(false);

	const getClaimsFromApi = async () => {
		const { getActiveDonationsForClient } = actions;
		const data = await getActiveDonationsForClient(resource);
		if (data) {
			await setDonationsOrClaims(data);
			setLoaded(true);
		}
	};

	useEffect(() => {
		if (isFocused) {
			getClaimsFromApi();
		}
	}, [ isFocused ]);

	if (!loaded) { return <Text>Loading...</Text>; }

	if (Array.isArray(claims) && claims !== []) {
		return getScrollViewOfDonations(claims);
	}
	return getNotDonationsView();
};
